import chevronLeft from '../../images/icons/chevron-left.svg';
import chevronRight from '../../images/icons/chevron-right.svg';
import { FEEDBACKS } from '../../constants/feedbacks';
import { useState } from 'react';

export default function FeedbackSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderLength = FEEDBACKS.length - 1;

  const handlePrevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(sliderLength)
    } else {
      setActiveSlide(activeSlide - 1)
    }
  }

  const handleNextSlide = () => {
    if (activeSlide === sliderLength) {
      setActiveSlide(0)
    } else {
      setActiveSlide(activeSlide + 1)
    }
  }

  const handleBulletClick = (
    index: number
  ) => {
    setActiveSlide(index)
  }

  return (
    <div className="feedbacks_section__slider">
      <div className="single_slide__container inner_container">
        { FEEDBACKS.map((feedback, index) => {
            return (
              <div
                key={`single_slide__${index}`}
                className={`single_slide__container ${activeSlide === index ? 'show' : 'hide'}`}
              >
                <img
                  src={feedback.logo}
                  alt="feedback slide company logo"
                  width="131"
                  height="32"
                  className="single_slide__company_logo"
                />
                <div className="single_slide__feedback">
                  "{feedback.feedback}"
                </div>
                <div className="single_slide__feedback_author">
                  <span>{feedback.author}</span>, <span>{feedback.position}</span>
                </div>
              </div>
            )
          })
        }
        <div className="slider__bullets">
          {Array.from(Array(FEEDBACKS.length).keys()).map((index) => {
            return (
              <span
                key={`bullet ${index}`}
                className={`slider__bullet ${activeSlide === index ? 'show' : 'hide'}`}
                onClick={() => handleBulletClick(index)}
              ></span>
            )
          })}
        </div>
      </div>
      <div className="slider__arrows_container">
        <div
          className="slider__nav_button"
          onClick={handlePrevSlide}
        >
          <img
            src={chevronLeft}
            alt="slider arrow left"
            width="12"
            height="24"
            className="slider__nav_button__image"
          />
        </div>
        <div
          className="slider__nav_button"
          onClick={handleNextSlide}
        >
          <img
            src={chevronRight}
            alt="slider arrow left"
            width="12"
            height="24"
            className="slider__nav_button__image"
          />
        </div>
      </div>
    </div>
  )
}
