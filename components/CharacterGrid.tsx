import React from 'react';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharacterGridProps {
  characters: Character[];
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ characters }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      {characters.map((char) => (
        <div
          key={char.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '0.5rem',
            textAlign: 'center',
          }}
        >
          <img
            src={char.image}
            alt={char.name}
            style={{ width: '100%', borderRadius: '4px' }}
          />
          <p>{char.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;
