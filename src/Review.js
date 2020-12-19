import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkIndexNumber = number => {
    if (number > people.length - 1) return 0;

    if (number < 0) return people.length - 1;

    return number;
  };

  const onPrevBtnClick = () => {
    setIndex(state => {
      let newState = state + 1;
      return checkIndexNumber(newState);
    });
  };
  const onNextBtnClick = () => {
    setIndex(state => {
      let newState = state - 1;
      return checkIndexNumber(newState);
    });
  };

  const getRandomIndex = () => {
    return Math.floor(Math.random() * Math.floor(people.length - 1));
  };

  const onRandomBtnClick = () => {
    let randomIndex = getRandomIndex();

    if (index === randomIndex) randomIndex = index + 1;

    setIndex(state => checkIndexNumber(randomIndex));
  };

  return (
    <article className="review" key={id}>
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={onPrevBtnClick}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={onNextBtnClick}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={onRandomBtnClick}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
