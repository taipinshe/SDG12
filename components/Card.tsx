
import React from 'react';
import { CardState } from '../types';
import { SDG_WHEEL_ICON } from '../constants';

interface CardProps {
  card: CardState;
  isFlipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ card, isFlipped, onClick }) => {
  return (
    <div className="w-20 h-28 sm:w-28 sm:h-40 perspective" onClick={onClick}>
      <div
        className={`relative w-full h-full preserve-3d transition-transform duration-700 rounded-lg shadow-lg ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Card Back */}
        <div className="absolute w-full h-full backface-hidden bg-gray-700 dark:bg-gray-600 rounded-lg flex items-center justify-center p-2 cursor-pointer">
          {SDG_WHEEL_ICON}
        </div>
        
        {/* Card Front */}
        <div
          className={`absolute w-full h-full backface-hidden rotate-y-180 ${card.color} rounded-lg flex flex-col items-center justify-center p-2 text-white text-center`}
        >
          {card.icon}
          <p className="text-xs sm:text-sm font-bold leading-tight mt-1">{card.en}</p>
          <p className="text-[10px] sm:text-xs font-light">{card.cn}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
