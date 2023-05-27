import { ReactElement, createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  session: {
    user: {
      id: "",
    },
  },
});

const { Provider } = AuthContext;

const useAutData = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [session, setSession] = useState<any>({});

  return {
    isAuthenticated,
    session,
  };
};

export function AuthProvider({ children }: { children: ReactElement }) {
  const data = useAutData();
  return <Provider value={data}>{children}</Provider>;
}

export const useAuth = () => useContext(AuthContext);
