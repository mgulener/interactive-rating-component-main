import React, {useState} from 'react';

export default function RatingState() {
  const [vote, setVote] = useState(0);
  const [success, setSuccess] = useState(false);

  const votes = [
    {
      id: 1,
      value: 1,
      label: '1'
    },
    {
      id: 2,
      value: 2,
      label: '2'
    },
    {
      id: 3,
      value: 3,
      label: '3'
    },
    {
      id: 4,
      value: 4,
      label: '4'
    },
    {
      id: 5,
      value: 5,
      label: '5'
    }
  ]

  const voteSubmit = () => {
    vote > 0 ? setSuccess(true) : setSuccess(false);
  };

  return (
    <>
      <div className={`rating-state js-rating-state ${success ? 'hidden' : ''}`}>
        <div className="rating-icon">
          <img src="./images/icon-star.svg" alt="icon start" />
        </div>
        <h1 className="rating-title">How did we do?</h1>
        <p className="rating-description">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <div className="rating-vote-buttons">
          {votes.map((voteItem) => {
            return (
              <button
                key = {voteItem.id}
                className = {`rating-vote-button ${voteItem.value === vote ? 'active' : ''}`}
                onClick = {() => setVote(voteItem.value)}
              >
                {voteItem.label}
              </button>
            )
          })}
        </div>
        <button className="rating-submit" onClick={voteSubmit}>SUBMIT</button>
      </div>

      <div className={`rating-success js-rating-success ${!success ? 'hidden' : ''}`}>
        <div className="rating-success-image">
          <img src="./images/illustration-thank-you.svg" alt="success" />
        </div>
        <div className="rating-success-result">
          You selected <strong>{vote}</strong> out of 5
        </div>
        <div className="rating-success-title">Thank you!</div>
        <p className="rating-description">
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
};