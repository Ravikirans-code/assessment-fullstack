import { Episode, Character } from '../types';

export const fetchEpisodes = async (): Promise<Episode[]> => {
  const res = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await res.json();
  return data.results;
};

export const fetchCharactersByIds = async (urls: string[]): Promise<Character[]> => {
  const ids = urls.map(url => url.split('/').pop()).join(',');
  const res = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [data];
};

export const fetchDefaultCharacters = async (): Promise<Character[]> => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return data.results;
};
