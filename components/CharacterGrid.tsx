import React from 'react';
import { Character, Episode } from '../types';

interface Props {
  characters: Character[];
  selectedEpisode: Episode | null;
}

const CharacterGrid: React.FC<Props> = ({ characters, selectedEpisode }) => {
  return (
    <div className="p-4">
      {selectedEpisode && (
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center sm:text-left">
          {characters.length} character{characters.length !== 1 ? 's' : ''} in the episode{" "}
          <span className="text-blue-600">"{selectedEpisode.name}"</span>
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {characters.map((char) => (
          <div
            key={char.id}
            className="bg-white rounded-lg shadow-md border border-gray-300 text-center p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={char.image}
              alt={char.name}
              className="w-full rounded-md mb-2"
            />
            <p className="font-semibold text-sm sm:text-base">{char.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterGrid;
