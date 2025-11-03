
import React, { useState, useEffect, useCallback } from 'react';
import { CardState } from './types';
import { SDGS_DATA } from './constants';
import Card from './components/Card';
import WinModal from './components/WinModal';

const shuffleArray = <T,>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

const App: React.FC = () => {
  const [cards, setCards] = useState<CardState[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const setupGame = useCallback(() => {
    const selectedGoals = shuffleArray(SDGS_DATA).slice(0, 8);
    const gameCards = shuffleArray([...selectedGoals, ...selectedGoals]).map(
      (goal, index) => ({
        ...goal,
        instanceId: index,
      })
    );
    setCards(gameCards);
    setFlippedIndices([]);
    setMatchedIds([]);
    setMoves(0);
    setIsGameOver(false);
    setIsChecking(false);
  }, []);

  useEffect(() => {
    setupGame();
  }, [setupGame]);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      setIsChecking(true);
      setMoves((prevMoves) => prevMoves + 1);
      const [firstIndex, secondIndex] = flippedIndices;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.id === secondCard.id) {
        setMatchedIds((prev) => [...prev, firstCard.id]);
        setFlippedIndices([]);
        setIsChecking(false);
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
          setIsChecking(false);
        }, 1200);
      }
    }
  }, [flippedIndices, cards]);
  
  useEffect(() => {
    if (matchedIds.length > 0 && matchedIds.length === 8) {
      setIsGameOver(true);
    }
  }, [matchedIds]);

  const handleCardClick = (index: number) => {
    if (isChecking || flippedIndices.includes(index) || isCardMatched(cards[index].id)) {
      return;
    }
    setFlippedIndices((prev) => [...prev, index]);
  };
  
  const isCardFlipped = (index: number) => {
      return flippedIndices.includes(index);
  };

  const isCardMatched = (id: number) => {
    return matchedIds.includes(id);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 flex flex-col items-center justify-center p-4 transition-colors duration-500">
      <div className="text-center mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">SDG Memory Game</h1>
        <p className="text-lg mt-2">Find all matching pairs!</p>
      </div>

      <div className="flex items-center justify-between w-full max-w-lg mb-4 px-2">
        <div className="text-xl font-semibold">
          Moves: <span className="text-blue-500 dark:text-blue-400 font-bold">{moves}</span>
        </div>
        <button
          onClick={setupGame}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          New Game
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4 bg-white/50 dark:bg-black/20 rounded-xl shadow-lg">
        {cards.map((card, index) => (
          <Card
            key={card.instanceId}
            card={card}
            isFlipped={isCardFlipped(index) || isCardMatched(card.id)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      
      {isGameOver && <WinModal moves={moves} onPlayAgain={setupGame} />}
    </div>
  );
};

export default App;
