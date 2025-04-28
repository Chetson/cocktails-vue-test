import type { CachedCocktailData, Cocktail } from '../types';
import { cocktailsAdapter } from '../adapters';

const cocktailCache: Record<string, CachedCocktailData> = {};
const CACHE_DURATION = 5 * 60 * 1000; // время кеша 5 минут

export const fetchCocktailData = async (
  query: string
): Promise<Cocktail[] | null> => {
  const currentTimestamp = Date.now();

  if (cocktailCache[query]) {
    const cachedData = cocktailCache[query];

    if (currentTimestamp - cachedData.timestamp < CACHE_DURATION) {
      return cachedData.cocktails;
    } else {
      delete cocktailCache[query];
    }
  }

  const response = await fetch(import.meta.env.MODE === 'production' ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query : '/api/json/v1/1/search.php?s=' + query);

  if (!response.ok) {
    return Promise.reject('Response error');
  }

  const data = await response.json();

  if (data === null || data?.drinks === null) {
    return Promise.reject('Cocktails not found.');
  }

  const cocktails: Cocktail[] = data.drinks
    ? data.drinks.map((cocktail: Record<string, string>) =>
        cocktailsAdapter(cocktail)
      )
    : null;

  if (cocktails) {
    cocktailCache[query] = {
      cocktails,
      timestamp: currentTimestamp,
    };
  }

  return cocktails;
};
