import { AppUserEntity } from './user.types';

export interface IAuthContextType {
    isAuthenticated: boolean;
    user: AppUserEntity;
    userLogin: (_newUser: AppUserEntity) => boolean;
    logoutUser: () => void;
}
