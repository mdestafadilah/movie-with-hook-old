import React from "react";

const SlideList = (props) => {
  const moveRight = () => {
    const element = document.getElementById(props.query);
    smooth(element, 210);
  };

  const moveLeft = () => {
    const element = document.getElementById(props.query);
    smooth(element, -210);
  };

  const scrolled = () => {
    const element = document.getElementById(props.query);
    const scrolled = element.scrollLeft;
    const contentWidth = element.scrollWidth;
    const viewWidth = element.clientWidth;
    if (viewWidth + scrolled > contentWidth - Math.round(viewWidth / 2))
      props.more();
  };

  const smooth = (element, pixels) => {
    const eachMove = Math.round(pixels / 10);
    let moved = 0;
    const timer = setInterval(() => {
      element.scrollBy(eachMove, 0);
      moved += eachMove;
      if (Math.abs(moved) >= Math.abs(pixels)) clearInterval(timer);
    }, 10);
  };
  return (
    <div className="slider">
      <div className="scroller">
        <div className="moving" onClick={moveLeft}>
          <p>&lt;</p>
        </div>
        <div className="slider" id={props.query} onScroll={scrolled}>
          <p>{props.list}</p>
        </div>
        <div className="moving" onClick={moveRight}>
          <p>&lt;</p>
        </div>
      </div>
    </div>
  );
};

export default SlideList;
