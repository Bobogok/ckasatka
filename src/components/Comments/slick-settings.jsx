import React from 'react';

const slickSettings = {
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  dots: true,
  arrows: false,
  infinite: true,
  autoplaySpeed: 4300,
  speed: 1100,
  pauseOnHover: true,
  cssEase: 'ease',
  appendDots: (dots) => (
    <>
      <div className="comments__bottom">
        <ul className="bullets"> {dots} </ul>
      </div>
    </>
  ),
  customPaging: () => <></>
};

export default slickSettings;
