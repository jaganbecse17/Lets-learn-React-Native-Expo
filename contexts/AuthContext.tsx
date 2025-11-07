import { AppUserEntity } from "@/contracts/user.types";
import { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: AppUserEntity;
  userLogin: (user: AppUserEntity) => boolean;
  logoutUser: () => void;
}

const authContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error(
      "Error: useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<AppUserEntity>({} as AppUserEntity);

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

  const initialState = {
    isAuthenticated: !!user.email,
    user,
    userLogin,
    logoutUser,
  };
  return (
    <authContext.Provider value={initialState}>{children}</authContext.Provider>
  );
};
