import React from 'react'
import AliceCarousel from "react-alice-carousel";

const SectionCarousel = () => {
    const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
};

const item=[1,1,1,1,1].map((item) => <SectionCarousel/>)
  return (
    <div>
        <AliceCarousel
              mouseTracking
              items={item}
              autoPlay
              infinite
              autoPlayInterval={2000}
              disableButtonsControls
              responsive={responsive}
            />
    </div>
  )
}

export default SectionCarousel