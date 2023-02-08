import { useState } from "react";
import styles from "./Ratings.module.css";

export function Ratings() {
  const [rating, setRating] = useState<number>();
  const [isSubmit, setIsSubmit] = useState(false);

  const ratingHandler = (rating: number) => {
    setRating(rating);
  };

  const isSubmitHandler = () => {
    setIsSubmit(true);
  };

  return isSubmit ? (
    <div className={styles.panelThank}>
      {" "}
      <div>
        <img src="../images/illustration-thank-you.svg"></img>
        <div className={styles.ratingSelect}>
          You selected {rating} out of 5
        </div>
        <h1 className={styles.header}>Thank you!</h1>
        <p className={styles.description}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!!
        </p>
      </div>
    </div>
  ) : (
    <div className={styles.panel}>
      <div className={styles.star}>
        <img src="../images/icon-star.svg"></img>
      </div>
      <h1 className={styles.header}>How did we do?</h1>

      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering.
      </p>

      <div className={styles.buttonArray}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            className={styles.rating}
            onClick={() => ratingHandler(rating)}
          >
            {rating}
          </button>
        ))}
      </div>

      <button
        disabled={rating === undefined}
        className={styles.submit}
        onClick={() => isSubmitHandler()}
      >
        Submit
      </button>
    </div>
  );
}
