import { useMutation } from "@tanstack/react-query";
import { useToast } from "native-base";
import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import * as Linking from "expo-linking";

import { loginRedirectUrl } from "src/constant/linking";
import { supabase } from "src/plugins/supabase";
import { extractTokensFromUrl } from "src/utility/function/parseURL";

const AuthContext: any = createContext({
  isAuthenticated: false,
  session: {
    user: {
      id: "",
    },
  },
});

const { Provider } = AuthContext;

const useAutData = () => {
  const toast = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [session, setSession] = useState<any>(null);

  const clearSession = () => {
    setIsAuthenticated(false);
    setSession(null);
  };

  const loginWithMagicLink = useMutation(
    ["auth.magic_link"],
    async (payload: { email: string }) => {
      const { error } = await supabase.auth.signInWithOtp({
        email: payload.email,
        options: {
          emailRedirectTo: loginRedirectUrl,
        },
      });
      if (error) {
        throw error;
      }
    },
    {
      onError: (error: { message: string; code: string }) => {
        toast.show({
          title: error.code,
          description: `${error.code}: ${error?.message}`,
          placement: "top",
        });
      },
    }
  );

  const singOutUser = useMutation(
    ["auth.logout"],
    async () => {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
    },
    {
      onSuccess: () => {
        clearSession();
      },
      onError: (error: { message: string; code: string }) => {
        toast.show({
          title: error.code,
          description: `${error.code}: ${error?.message}`,
          placement: "top",
        });
      },
    }
  );

  // part of authenticating user
  async function handleURL(url: string) {
    const { refreshToken, accessToken } = await extractTokensFromUrl(url);

    supabase.auth
      .setSession({
        access_token: accessToken || "",
        refresh_token: refreshToken || "",
      })
      .then((res) => {
        setSession(res);
        setIsAuthenticated(true);
      })
      .catch(() => {
        clearSession();
      });
  }

  // checking auth state
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsAuthenticated(Boolean(session));
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsAuthenticated(Boolean(session));
    });
  }, []);

  // deep link-auth
  useEffect(() => {
    function addLinkingEventListener() {
      Linking.addEventListener("url", (evt) => {
        handleURL(evt?.url);
      });
    }

    Linking.getInitialURL()
      .then(() => {
        handleURL;
      })
      .catch(() => {
        clearSession();
      })
      .finally(() => {
        addLinkingEventListener();
      });
  }, []);

  return {
    isAuthenticated,
    session,

    loginWithMagicLink,
    singOutUser,
  };
};

export function AuthProvider({ children }: { children: ReactElement }) {
  const data = useAutData();
  return <Provider value={data}>{children}</Provider>;
}

export const useAuth: any = () => useContext(AuthContext);
