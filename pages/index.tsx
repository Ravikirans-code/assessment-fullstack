import { useEffect, useState } from 'react';
import EpisodeList from '../components/EpisodeList';
import CharacterGrid from '../components/CharacterGrid';
import { fetchEpisodes, fetchCharactersByIds, fetchDefaultCharacters } from '../utils/api';
import { Episode, Character } from '../types';

export default function Home() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    fetchEpisodes().then(setEpisodes);
    fetchDefaultCharacters().then(setCharacters);
  }, []);

  useEffect(() => {
    if (selectedEpisode) {
      fetchCharactersByIds(selectedEpisode.characters).then(setCharacters);
    } else {
      fetchDefaultCharacters().then(setCharacters);
    }
  }, [selectedEpisode]);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <div style={{ width: '250px', overflowY: 'auto', borderRight: '1px solid #ccc' }}>
        <EpisodeList
          episodes={episodes}
          selectedId={selectedEpisode?.id ?? null}
          onSelect={setSelectedEpisode}
        />
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <CharacterGrid characters={characters} />
      </div>
    </div>
  );
}
