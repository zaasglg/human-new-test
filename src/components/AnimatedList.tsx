import { useState, useEffect } from 'react';

interface AnimatedListProps {
  items: string[];
  className?: string;
}

export const AnimatedList = ({ items, className = '' }: AnimatedListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000); // Меняется каждые 4 секунды

    return () => clearInterval(interval);
  }, [items.length]);

  const getItemStyle = (index: number) => {
    const distance = Math.abs(index - currentIndex);
    const isActive = index === currentIndex;
    const isPrevious = index === (currentIndex - 1 + items.length) % items.length;
    const isNext = index === (currentIndex + 1) % items.length;

    if (isActive) {
      return {
        opacity: 'opacity-100',
        transform: 'transform scale-110',
        blur: '',
        zIndex: 'z-20'
      };
    } else if (isPrevious || isNext) {
      return {
        opacity: 'opacity-60',
        transform: 'transform scale-100',
        blur: '',
        zIndex: 'z-10'
      };
    } else if (distance <= 2) {
      return {
        opacity: 'opacity-30',
        transform: 'transform scale-100',
        blur: '',
        zIndex: 'z-0'
      };
    } else {
      return {
        opacity: 'opacity-15',
        transform: 'transform scale-100',
        blur: '',
        zIndex: 'z-0'
      };
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative px-4" style={{ minHeight: '320px' }}>
        {items.map((item, index) => {
          const style = getItemStyle(index);
          const isActive = index === currentIndex;
          
          return (
            <div
              key={index}
              className={`absolute inset-x-0 flex items-center justify-center text-center transition-all duration-700 ease-in-out ${
                style.opacity
              } ${style.transform} ${style.zIndex}`}
              style={{
                top: `${index * 40}px`,
                height: '40px'
              }}
            >
              {/* Текст */}
              <span
                className={`font-medium transition-all duration-700 ease-in-out relative break-words leading-tight ${
                  isActive
                    ? 'text-lg text-black font-bold'
                    : 'text-base text-gray-600 font-normal'
                }`}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Прогресс-бар */}
      <div className="mt-6 mx-4 w-auto bg-gray-200 rounded-full h-1">
        <div 
          className="bg-black h-1 rounded-full transition-all duration-4000 ease-linear"
          style={{
            width: `${((currentIndex + 1) / items.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};