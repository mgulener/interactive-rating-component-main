import React from 'react'
import RatingState from "./RatingState";

const App = () => {
  return (
    <>
      <section className="rating">
        <div className="rating-container">
          <RatingState />
        </div>
      </section>
    </>
  );
};

export default App;