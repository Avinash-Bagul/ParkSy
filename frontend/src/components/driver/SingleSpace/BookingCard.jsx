import React, { useCallback, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "../../popups/SuccessPopup";

const API = import.meta.env.VITE_API;

// ─── Animations ────────────────────────────────────────────────────────────
export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

// ─── Styled Components ──────────────────────────────────────────────────────
const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.10);
  padding: 28px 24px;
  position: sticky;
  top: 90px;
  animation: ${fadeUp} 0.4s ease both;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 20px;
`;

const Amount = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: #198754;
`;

const Per = styled.span`
  font-size: 0.95rem;
  color: #888;
`;

const SectionLabel = styled.label`
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #444;
  margin-bottom: 6px;
`;

const StyledInput = styled(Field)`
  width: 100%;
  border: 1.5px solid ${(p) => (p.$error ? "#dc3545" : "#e0e0e0")};
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 0.95rem;
  color: #222;
  background: #fafafa;
  transition: border-color 0.2s;
  outline: none;

  &:focus {
    border-color: ${(p) => (p.$error ? "#dc3545" : "#f97316")};
    background: #fff;
  }
`;

const ErrMsg = styled.div`
  font-size: 0.78rem;
  color: #dc3545;
  margin-top: 4px;
`;

const FieldGroup = styled.div`
  margin-bottom: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #f0f0f0;
  margin: 20px 0;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.92rem;
  color: #555;
  margin-bottom: 8px;

  span:last-child {
    font-weight: 600;
    color: #222;
  }
`;

const TotalRow = styled(SummaryRow)`
  font-size: 1.05rem;
  font-weight: 700;
  color: #222;

  span:last-child {
    color: #198754;
    font-size: 1.15rem;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: #f97316;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  &:hover:not(:disabled) {
    background: #ea6c00;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const Spinner = styled.span`
  width: 18px;
  height: 18px;
  border: 2.5px solid rgba(255, 255, 255, 0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
  display: inline-block;
`;

const AlertBox = styled.div`
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 500;
  margin-top: 16px;
  background: ${(p) => (p.$success ? "#d1fae5" : "#fee2e2")};
  color: ${(p) => (p.$success ? "#065f46" : "#991b1b")};
  border: 1px solid ${(p) => (p.$success ? "#6ee7b7" : "#fca5a5")};
`;

// ─── Helpers ────────────────────────────────────────────────────────────────
const calcHours = (start, end) => {
  if (!start || !end) return 0;
  const diff = (new Date(end) - new Date(start)) / 3600000;
  return diff > 0 ? diff : 0;
};

// Calculates total including 5% service fee
const calcTotal = (start, end, pricePerHour) => {
  const hours = start && end ? calcHours(start, end) : 1;
  const subtotal = hours * pricePerHour;
  return +(subtotal + subtotal * 0.05).toFixed(2);
};

const formatCurrency = (val) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(val);

// ─── Validation Schema ───────────────────────────────────────────────────────
const BookingSchema = Yup.object().shape({
  start_time: Yup.string()
    .required("Start time is required")
    .test("not-past", "Start time cannot be in the past", (value) => {
      if (!value) return false;
      return new Date(value) >= new Date();
    }),
  end_time: Yup.string()
    .required("End time is required")
    .test("after-start", "End time must be after start time", function (value) {
      const { start_time } = this.parent;
      if (!start_time || !value) return true;
      return new Date(value) > new Date(start_time);
    })
    .test("min-duration", "Minimum booking is 1 hour", function (value) {
      const { start_time } = this.parent;
      if (!start_time || !value) return true;
      return calcHours(start_time, value) >= 1;
    }),
});

// ─── Component ───────────────────────────────────────────────────────────────
const BookingCard = ({ spaceId, space }) => {
  const [apiStatus, setApiStatus] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false); // ← add this
  const navigate = useNavigate();

  const pricePerHour = space?.price_per_hour ?? 0;

  const now = new Date();
  now.setMinutes(0, 0, 0);
  now.setHours(now.getHours() + 1);
  const toLocal = (d) =>
    new Date(d - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);

  // REMOVE these two lines:
  const defaultStart = toLocal(now);
  const defaultEnd = toLocal(new Date(now.getTime() + 3600000 * 2));

  // CHANGE initialValues to:
  const initialValues = {
    start_time: "",
    end_time: "",
    total_price: 0,
  };


  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setApiStatus(null);
    try {
      const total_price = calcTotal(values.start_time, values.end_time, pricePerHour);
      await axios.post(
        `${API}/api/booking/create`,
        { ...values, space_id: spaceId, total_price },
        { withCredentials: true }
      );
      resetForm();
      setShowSuccess(true); // ← show popup instead of inline alert
    } catch (err) {
      const msg = err?.response?.data?.message ?? "Booking failed. Please try again.";
      setApiStatus({ success: false, message: msg });
    } finally {
      setSubmitting(false);
    }
  };


  const handleRedirect = useCallback(() => {
    setShowSuccess(false);
    navigate(
      `/directions?fromLat=${userLat}&fromLng=${userLng}&toLat=${space.latitude}&toLng=${space.longitude}}`
    );
  }, [navigate, spaceId]);


  return (
    <>


      {showSuccess && (
        <SuccessPopup
          spaceName={space?.name}
          onRedirect={handleRedirect}
        />
      )}

      <Card>
        <PriceRow>
          <Amount>{formatCurrency(pricePerHour)}</Amount>
          <Per>/ hour</Per>
        </PriceRow>

        <Formik
          initialValues={initialValues}
          validationSchema={BookingSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values, errors, touched, isSubmitting }) => {
            const hours = calcHours(values.start_time, values.end_time);
            const subtotal = hours * pricePerHour;
            const serviceFee = subtotal * 0.05;
            const total = subtotal + serviceFee;

            return (
              <Form noValidate>
                {/* Start time */}
                <FieldGroup>
                  <SectionLabel>Check-in</SectionLabel>
                  <Field name="start_time">
                    {({ field }) => (
                      <StyledInput
                        {...field}
                        as="input"
                        type="datetime-local"
                        min={toLocal(now)}
                        $error={touched.start_time && errors.start_time}
                      />
                    )}
                  </Field>
                  <ErrorMessage name="start_time">
                    {(msg) => <ErrMsg>{msg}</ErrMsg>}
                  </ErrorMessage>
                </FieldGroup>

                {/* End time */}
                <FieldGroup>
                  <SectionLabel>Check-out</SectionLabel>
                  <Field name="end_time">
                    {({ field }) => (
                      <StyledInput
                        {...field}
                        as="input"
                        type="datetime-local"
                        min={values.start_time || toLocal(now)}
                        $error={touched.end_time && errors.end_time}
                      />
                    )}
                  </Field>
                  <ErrorMessage name="end_time">
                    {(msg) => <ErrMsg>{msg}</ErrMsg>}
                  </ErrorMessage>
                </FieldGroup>

                {/* Price Summary */}

                <>
                  <Divider />
                  <SummaryRow>
                    <span>
                      {formatCurrency(pricePerHour)} × {hours.toFixed(1)} hr
                      {hours !== 1 ? "s" : ""}
                    </span>
                    <span>{formatCurrency(subtotal)}</span>
                  </SummaryRow>
                  <SummaryRow>
                    <span>Service fee (5%)</span>
                    <span>{formatCurrency(serviceFee)}</span>
                  </SummaryRow>
                  <Divider />
                  <TotalRow>
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                  </TotalRow>
                </>

                <SubmitBtn type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Spinner /> Booking…
                    </>
                  ) : (
                    "Reserve Now"
                  )}
                </SubmitBtn>

                {apiStatus && (
                  <AlertBox $success={apiStatus.success}>{apiStatus.message}</AlertBox>
                )}
              </Form>
            );
          }}
        </Formik>
      </Card>
    </>
  );
};

export default BookingCard;