import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IUserContext {
  userId: string;
  fullName: string;
  role: string;
  email: string;
  iat: number;
  exp: number;
}

interface UserProviderProps {
  user: IUserContext | null;
  loading: boolean;
  setUser: (user: IUserContext | null) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<UserProviderProps | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUserContext | null>(null);
  const [loading, setLoading] = useState(true);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
