import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./Carousel.css";

export function CarouselItem({ children, width }) {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
}

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    /* This method will receive a new index and do the check if the active is the first item or the last item */
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });
    
  return (
      <div
          {...handlers}
          className="carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
      >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>

        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}

        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;


/*
A swipeable carousel on mobile devices

We can do it manually by using the onTouchStart and onTouchEnd but I will use a library to reduce the complexity.I will be using the react - swipeable package which you can find out here https://www.npmjs.com/package/react-swipeable

Note: Please ensure you 'npm i react-swipeable' to install this package
*/