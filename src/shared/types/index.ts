export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  ingredients: string[];
  measures: string[];
  strDrinkThumb: string;
}

export interface CachedCocktailData {
  cocktails: Cocktail[];
  timestamp: number;
}
