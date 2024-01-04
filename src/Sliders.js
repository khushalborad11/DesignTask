import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './App.css';

export default function Sliders() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className='bg1 '>
      <div className='container  text-center'>
        <h1 className='dq2'>Technologies/Frameworks</h1>
        <Slider className='dq1'{...settings}>
          <div>
            <i className="fa fa-diamond" style={{ fontSize: '36px' }}></i>
          </div>
          <div>
            <i class="fa fa-braille" style={{ fontSize: '36px' }}></i>
          </div>
          <div>
            <i class="fa fa-birthday-cake" style={{ fontSize: '36px' }}></i>
          </div>
          <div>
            <i class="fa fa-bank" style={{ fontSize: '36px' }}></i>
          </div>
          <div>
            <i class="fa fa-asterisk" style={{ fontSize: '36px' }}></i>
          </div>
          <div>
        <i class="fa fa-balance-scale" style={{ fontSize: '36px' }}></i>
          </div>
        </Slider>
      </div>
    </div>
  );
}
