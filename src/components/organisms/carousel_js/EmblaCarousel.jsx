import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import '../../atoms/carousel_css/embla.css'

import background1 from '@images/backgrounds/1.gif'
import background2 from '@images/backgrounds/2.gif'
import background3 from '@images/backgrounds/3.gif'


export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
        <div className="embla__slide">
          <img src = {background1} alt = "Mario browsing on a computer" />
        </div>
        <div className="embla__slide">
          <img src = {background2} alt = "A room with an office and a fish tank" />
        </div>
        <div className="embla__slide">
          <img src = {background3} alt = "A nightly city view" />
        </div>      </div>
    </div> 
    </div>
  )
  }
  

export default EmblaCarousel
