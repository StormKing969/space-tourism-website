import { useState, useEffect, useRef } from 'react'
import BgImgMobile from '../../assets/home/background-home-mobile.jpg'
import BgImgTablet from '../../assets/home/background-home-tablet.jpg'
import BgImgDesktop from '../../assets/home/background-home-desktop.jpg'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useResizedImages() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const imgBg = useRef(BgImgMobile);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if(windowDimensions.width < 600) {
      imgBg.current = BgImgMobile;
    }

    if(windowDimensions.width > 600) {
      imgBg.current = BgImgTablet;
    }
    
    if (windowDimensions.width > 1020) {
      imgBg.current = BgImgDesktop;
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  
  return imgBg;
}