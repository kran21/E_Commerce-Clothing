import React from 'react'
import MainCarousel from '../../component/HomeCarousel/MainCarousel'
import SectionCarousel from '../../component/HomeSectionCarousel/SectionCarousel'

export const Homepage = () => {
  return (
    <div>
        <MainCarousel/>
        <div>
            <SectionCarousel/>
        </div>
    </div>
  )
}
