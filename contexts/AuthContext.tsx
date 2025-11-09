import React, { createContext, useContext, useMemo, useState } from 'react';

import { IAuthContextType } from '@/contracts/context.types';
import { AppUserEntity } from '@/contracts/user.types';

const authContext = createContext<IAuthContextType | undefined>(undefined);

export const useAuthContext = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error(
            'Error: useAuthContext must be used within an AuthContextProvider',
        );
    }
    return context;
};

export function AuthContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<AppUserEntity>({
        email: '',
        password: '',
    } as AppUserEntity);

    const userLogin = (newUser: AppUserEntity) => {
        if (newUser.email && newUser.password) {
            setUser(newUser);
            return true;
        }
        return false;
    };

    const logoutUser = () => {
        setUser({} as AppUserEntity);
    };

    const initialState = useMemo(
        () => ({
            isAuthenticated: !!user.email,
            user,
            userLogin,
            logoutUser,
        }),
        [user],
    );

    return (
        <authContext.Provider value={initialState}>
            {children}
        </authContext.Provider>
    );
}
