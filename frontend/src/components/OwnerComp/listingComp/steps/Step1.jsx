import { useForm } from "react-hook-form";

export default function Step1Basic({ nextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    nextStep(1); // mark step 1 complete → move to step 2
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input
    //     placeholder="Title"
    //     {...register("title", { required: "Title required" })}
    //   />
    //   <p>{errors.title?.message}</p>

    //   <textarea
    //     placeholder="Description"
    //     {...register("description", { required: true })}
    //   />

    //   <input type="file" multiple />

    //   <button type="submit">Next</button>
    // </form>

    <>
        
    </>
  );
}
