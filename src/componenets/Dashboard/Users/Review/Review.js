import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../../../hooks/useFirebase";


const Review = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const { user } = useFirebase();
  const onSubmit = (data) => {
    fetch("https://mysterious-gorge-90895.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
          console.log(result);
          if (result.insertedId) {
            alert('Thanks for your review');
            // clearTheCart();
            reset();
        }
      });

    console.log(data);
  };
  return (
    <div>
      <h1 className="mb-2"> Review </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="Ratings"
          placeholder="Ratings (0-5)"
          {...register("ratings", { required: true })}
        />
        <br />
        <input
          className="submit-btn btn btn-primary mt-3"
          type="submit"
          value="Post"
        />
      </form>
    </div>
  );
};

export default Review;