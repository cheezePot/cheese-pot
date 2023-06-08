import { useState, useRef } from "react";

const TouchSlider = ({children}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [offsetX, setOffsetX] = useState(0);
    const sliderRef = useRef(null);
  
    const handleMouseDown = (event) => {
      setIsDragging(true);
      setStartX(event.pageX - offsetX);
    };
  
    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const x = event.pageX - startX;
      setOffsetX(x);
      sliderRef.current.style.transform = `translateX(${x}px)`;
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    return (
        <div 
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        ref={sliderRef}
        >
        {children}
      </div>
    );
  };
  
  export default TouchSlider;
  