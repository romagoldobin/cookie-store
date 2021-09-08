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