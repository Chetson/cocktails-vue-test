import { defineStore } from 'pinia';
import { fetchCocktailData } from '../api';
import type { Cocktail } from '../types';

interface PageState {
  data: Cocktail[] | null;
  loading: boolean;
  error: string | null;
}

export const usePageStore = defineStore('page', {
  state: (): PageState => ({
    data: null,
    loading: false,
    error: null,
  }),
  actions: {
    async loadData(cocktailName: string) {
      try {
        this.loading = true;
        this.error = null;
        // кеширование происходит на уровне API
        this.data = await fetchCocktailData(cocktailName);
      } catch (err) {
        if (typeof err === 'string') {
          this.error = err;
        } else {
          this.error = 'Ошибка запроса';
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
