import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import '../carousel_js/embla.css'

import background1 from 'src/assets/images/backgrounds/1.gif'
import background2 from 'src/assets/images/backgrounds/2.gif'
import background3 from 'src/assets/images/backgrounds/3.gif'


export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  const placeholderImages =["src/assets/images/backgrounds/1.gif", "src/assets/images/backgrounds/2.gif", "src/assets/images/backgrounds/3.gif"]
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {placeholderImages.map((src, index) => (
          <div className="embla__slide" key ={index}>
            <img
            src ={src}
            className="embla__image"
            alt = {`Slide ${index + 1}`}
            />
            </div>
        ))}
    </div> 
    </div>
  )
  }
  

export default EmblaCarousel
