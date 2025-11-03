
import React from 'react';

interface WinModalProps {
  moves: number;
  onPlayAgain: () => void;
}

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
    </svg>
);


const WinModal: React.FC<WinModalProps> = ({ moves, onPlayAgain }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full mx-4 transform transition-all scale-100 animate-in fade-in-0 zoom-in-95 duration-500">
        <div className="relative">
          <StarIcon className="absolute -top-12 -left-8 w-12 h-12 text-yellow-400 transform -rotate-12 animate-pulse" />
          <StarIcon className="absolute -top-8 -right-10 w-8 h-8 text-yellow-300 transform rotate-12 animate-pulse delay-200" />
          <StarIcon className="absolute top-16 -left-12 w-6 h-6 text-yellow-300 transform rotate-45 animate-pulse delay-400" />
          <StarIcon className="absolute top-20 -right-8 w-10 h-10 text-yellow-400 transform -rotate-45 animate-pulse delay-100" />
        </div>
        <h2 className="text-3xl font-bold text-green-500 mb-2">Congratulations!</h2>
        <p className="text-xl dark:text-gray-300 mb-4">恭喜過關!</p>
        <p className="text-lg dark:text-gray-400 mb-6">
          You completed the game in <span className="font-bold text-blue-500 dark:text-blue-400">{moves}</span> moves.
        </p>
        <button
          onClick={onPlayAgain}
          className="w-full px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default WinModal;
