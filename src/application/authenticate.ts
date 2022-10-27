import { fakeAPI } from '../api';
import { Email, UserName } from '../sharedTypes';
import { AuthService } from './ports';



export const useAuthenticate = (): AuthService => {
  return {
    auth(name: UserName, email: Email) {
      return fakeAPI({
        name,
        email,
        id: 'sample-user-id',
        allergies: ['cocoa', 'cherry'],
        preferences: ['marshmallow', 'peanuts'],
      });
    },
  };
};
