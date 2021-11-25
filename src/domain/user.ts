import { User } from '../interface/TUser';
import { Ingredient } from '../sharedTypes';

export const hasAllergy = (user: User, ingredient: Ingredient): boolean => {
  return user.allergies.includes(ingredient);
};

export const hasPreferences = (user: User, ingredient: Ingredient): boolean => {
  return user.preferences.includes(ingredient);
};
