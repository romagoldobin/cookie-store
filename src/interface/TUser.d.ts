import { UniqueId, UserName, Email, Ingredient } from '../sharedTypes';

export type User = {
  id: UniqueId;
  name: UserName;
  email: Email;
  preferences: Ingredient[];
  allergies: Ingredient[];
}
