import React from 'react';
import { Episode } from '../types';

interface Props {
  episodes: Episode[];
  selectedId: number | null;
  onSelect: (ep: Episode | null) => void;
}

const EpisodeList: React.FC<Props> = ({ episodes, selectedId, onSelect }) => {
  return (
    <aside style={{ width: '250px', borderRight: '1px solid #ccc' }}>
      <h2 style={{ padding: '1rem' }}>Episodes</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {episodes.map(ep => (
          <li
            key={ep.id}
            style={{
              padding: '0.75rem 1rem',
              cursor: 'pointer',
              backgroundColor: ep.id === selectedId ? '#ddd' : 'transparent',
            }}
            onClick={() => onSelect(ep.id === selectedId ? null : ep)}
          >
            {ep.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default EpisodeList;
