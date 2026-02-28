import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";


export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Replace these styled components ─────────────────────────────────────

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeUp} 0.2s ease both;
`;

const PopupCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 28px 28px 24px;
  max-width: 320px;
  width: 90%;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  animation: ${fadeUp} 0.3s ease both;
`;

const CheckCircle = styled.div`
  width: 44px;
  height: 44px;
  background: #f0fdf4;
  border: 2px solid #bbf7d0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;

  svg {
    width: 20px;
    height: 20px;
    stroke: #16a34a;
    stroke-width: 2.5;
    fill: none;
  }
`;

const PopupTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #111;
  margin: 0 0 6px;
`;

const PopupSubtitle = styled.p`
  font-size: 0.82rem;
  color: #888;
  margin: 0 0 18px;
  line-height: 1.5;
`;

const CountdownBar = styled.div`
  height: 3px;
  background: #f0f0f0;
  border-radius: 99px;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    background: #16a34a;
    border-radius: 99px;
    transform-origin: left;
    animation: shrink ${(p) => p.$duration}ms linear forwards;
  }

  @keyframes shrink {
    from { transform: scaleX(1); }
    to   { transform: scaleX(0); }
  }
`;

const PopupNote = styled.p`
  font-size: 0.75rem;
  color: #bbb;
  margin: 8px 0 0;
`;


const REDIRECT_DELAY = 5000; // ms

// const SuccessPopup = ({ spaceName, onRedirect }) => {
//   const [count, setCount] = useState(Math.ceil(REDIRECT_DELAY / 1000));

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((c) => {
//         if (c <= 1) { clearInterval(timer); return 0; }
//         return c - 1;
//       });
//     }, 1000);

//     const redirect = setTimeout(onRedirect, REDIRECT_DELAY);

//     return () => { clearInterval(timer); clearTimeout(redirect); };
//   }, [onRedirect]);

//   return (
//     <Overlay>
//       <PopupCard>
//         <CheckCircle>
//           <svg viewBox="0 0 24 24">
//             <polyline points="20 6 9 17 4 12" />
//           </svg>
//         </CheckCircle>

//         <PopupTitle>Booking Confirmed! 🎉</PopupTitle>
//         <PopupSubtitle>
//           Your booking for <strong>{spaceName ?? "this space"}</strong> is confirmed.
//           We're redirecting you to navigate to the space.
//         </PopupSubtitle>

//         <CountdownBar $duration={REDIRECT_DELAY} />

//         <PopupNote>Redirecting in {count} second{count !== 1 ? "s" : ""}…</PopupNote>
//       </PopupCard>
//     </Overlay>
//   );
// };

const SuccessPopup = ({ spaceName, onRedirect }) => {
    const [count, setCount] = useState(Math.ceil(REDIRECT_DELAY / 1000));

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((c) => {
                if (c <= 1) { clearInterval(timer); return 0; }
                return c - 1;
            });
        }, 1000);
        const redirect = setTimeout(onRedirect, REDIRECT_DELAY);
        return () => { clearInterval(timer); clearTimeout(redirect); };
    }, [onRedirect]);

    return (
        <Overlay>
            <PopupCard>
                <CheckCircle>
                    <svg viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </CheckCircle>

                <PopupTitle>Booking confirmed</PopupTitle>
                <PopupSubtitle>
                    Redirecting you to direction page
                </PopupSubtitle>

                <CountdownBar $duration={REDIRECT_DELAY} />
                <PopupNote>Redirecting in {count}s…</PopupNote>
            </PopupCard>
        </Overlay>
    );
};

export default SuccessPopup;