export type UserName = string;
export type UniqueId = string;
export type Email = string;
export type Ingredient = 'chocolate' | 'peanuts' | 'cocoa' | 'marshmallow' | 'cherry';

export type User = {
  id: UniqueId;
  name: UserName;
  email: Email;
  preferences: Ingredient[];
  allergies: Ingredient[];
}

export const hasAllergy = (user: User, ingredient: Ingredient): boolean => {
  return user.allergies.includes(ingredient);
};

export const hasPreferences = (user: User, ingredient: Ingredient): boolean => {
  return user.preferences.includes(ingredient);
};
