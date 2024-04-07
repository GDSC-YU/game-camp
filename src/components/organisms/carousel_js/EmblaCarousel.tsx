import React, { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import background1 from '../../../assets/images/backgrounds/1.gif';
import background2 from '../../../assets/images/backgrounds/2.gif';
import background3 from '../../../assets/images/backgrounds/3.gif';


const EmblaCarousel: React.FC = () => {

  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef} style={{overflow: 'hidden'}}>
      <div className="embla--container">
        <div className="embla__slide ">
          <img src= '../../../assets/images/backgrounds/1.gif' alt='Slide1'/>
        </div>
        <div className="embla__slide ">
          <img src='../../../assets/images/backgrounds/2.gif' alt='Slide2'/>
        </div>
        <div className="embla__slide ">
          <img src='../../../assets/images/backgrounds/3.gif' alt='Slide3'/>
          </div>
      </div>
    </div>
  )
};

export default EmblaCarousel;
