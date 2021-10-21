import React from 'react';

const slickSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1300,
  autoplay: true,
  autoplaySpeed: 2600,
  pauseOnHover: true,
  appendDots: (dots) => (
    <>
      <div className="advantage__bottom">
        <ul className="bullets"> {dots} </ul>
      </div>
    </>
  ),
  customPaging: () => <></>
};

export default slickSettings;
