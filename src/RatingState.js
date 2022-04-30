import React, {useState} from 'react';

export default function RatingState() {
  const [vote, setVote] = useState(0);

  const voteClick = (e) => {
    const $target = e.currentTarget;
    const $activeTarget = document.querySelector('.rating-vote-button.active');
    const vote = parseInt($target.innerHTML);

    $activeTarget?.classList.remove('active');
    $target.classList.add('active');

    setVote(vote);
  }

  const voteSubmit = () => {
    if (vote > 0) {
      const $success = document.querySelector('.js-rating-success');
      const $state = document.querySelector('.js-rating-state');

      $success.classList.remove('hidden');
      $state.classList.add('hidden');
    }
  };

  return (
    <>
      <div className="rating-state js-rating-state">
        <div className="rating-icon">
          <img src="./images/icon-star.svg" alt="icon start" />
        </div>
        <h1 className="rating-title">How did we do?</h1>
        <p className="rating-description">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <div className="rating-vote-buttons">
          <button className="rating-vote-button" onClick={voteClick}>1</button>
          <button className="rating-vote-button" onClick={voteClick}>2</button>
          <button className="rating-vote-button" onClick={voteClick}>3</button>
          <button className="rating-vote-button" onClick={voteClick}>4</button>
          <button className="rating-vote-button" onClick={voteClick}>5</button>
        </div>
        <button className="rating-submit" onClick={voteSubmit}>SUBMIT</button>
      </div>

      <div className="rating-success js-rating-success hidden">
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