import React from 'react';
import { Carousel } from 'antd';
import '../styles/Carousel.css';

export default function Tours() {
  return (
    <Carousel autoplay>
      <div>
        <h3 className='contentStyle'>
          <img
            className='bckg'
            src='../assets/bg.jpg'
            alt={'Medellin Galeria Tour'}
          />
        </h3>
      </div>
      <div>
        <h3 className='contentStyle'>2</h3>
      </div>
      <div>
        <h3 className='contentStyle'>3</h3>
      </div>
      <div>
        <h3 className='contentStyle'>4</h3>
      </div>
    </Carousel>
  );
}
