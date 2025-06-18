import React from 'react';
import { Episode } from '../types';

interface Props {
  episodes: Episode[];
  selectedId: number | null;
  onSelect: (ep: Episode | null) => void;
}

const EpisodeList: React.FC<Props> = ({ episodes, selectedId, onSelect }) => {
  return (
    <aside className="w-full sm:w-[250px] h-[40vh] sm:h-full overflow-y-auto border-b sm:border-b-0 sm:border-r border-gray-300 bg-gray-50">
      <h2 className="text-base text-center sm:text-lg font-bold p-3 sm:p-4 border-b border-gray-300">
        Episodes
      </h2>
      <ul className="divide-y divide-gray-200">
        {episodes.map((ep) => (
          <li
            key={ep.id}
            className={`p-3 sm:p-4 cursor-pointer hover:bg-gray-200 transition ${
              ep.id === selectedId ? 'bg-gray-300 font-semibold' : ''
            }`}
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
