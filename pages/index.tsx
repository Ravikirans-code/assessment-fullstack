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
    <div className="flex flex-col h-screen">
      <header className="bg-yellow-700 text-white text-center py-4 shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
          Rick and Morty Characters
        </h1>
      </header>
      <div className="flex flex-col sm:flex-row h-screen overflow-hidden">
        <EpisodeList
          episodes={episodes}
          selectedId={selectedEpisode?.id ?? null}
          onSelect={setSelectedEpisode}
        />
        <main className="flex-1 overflow-y-auto">
          <CharacterGrid characters={characters} selectedEpisode={selectedEpisode} />
        </main>
      </div>

    </div>
  );
}
