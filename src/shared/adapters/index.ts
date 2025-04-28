import type { Cocktail } from '../types';

export const cocktailsAdapter = (data: Record<string, string>): Cocktail => {
  const ingredientsArray: string[] = [];
  const measuresArray: string[] = [];

  for (const key in data) {
    if (key.startsWith('strIngredient')) {
      const ingredient = data[key as keyof Cocktail];
      if (ingredient) {
        ingredientsArray.push(ingredient);
      }
    }
    if (key.startsWith('strMeasure')) {
      const measure = data[key as keyof Cocktail];
      if (measure) {
        measuresArray.push(measure);
      }
    }
  }

  const { ingredients, ...rest } = data;

  return {
    ...rest,
    ingredients: ingredientsArray,
    measures: measuresArray,
  } as Cocktail;
};
