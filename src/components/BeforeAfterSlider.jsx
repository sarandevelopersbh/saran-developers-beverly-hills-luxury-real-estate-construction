import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({ beforeImage, afterImage, alt = "Transformation" }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    
    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e) => {
      if (isDragging) handleMove(e);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('touchend', handleGlobalMouseUp);
    window.addEventListener('touchmove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchend', handleGlobalMouseUp);
      window.removeEventListener('touchmove', handleGlobalMouseMove);
    };
  }, [isDragging]);

  return (
    <div className="w-full relative select-none group" ref={containerRef}>
      <div 
        className="relative w-full aspect-video overflow-hidden rounded-sm cursor-col-resize"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt={`After ${alt}`} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">AFTER</div>

        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt={`Before ${alt}`} 
            className="absolute top-0 left-0 w-full max-w-none h-full object-cover"
            style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
          />
          <div className="absolute top-4 left-4 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">BEFORE</div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-neutral-900">
            <MoveHorizontal size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}