import { createContext, useState, ReactNode } from "react";

interface ChildrenProps {children: ReactNode}
interface AuthContextData {
  loadingAPI: Boolean,
  setLoadingAPI: Function,
}

const initialState: AuthContextData = {
  loadingAPI: true,
  setLoadingAPI: Function,
}

export const ContextGlobal = createContext<AuthContextData>(initialState);

const GlobalContext = ({children}:ChildrenProps) => {
  const [loadingAPI, setLoadingAPI] = useState(true);

  return (
    <ContextGlobal.Provider value={{
      loadingAPI, setLoadingAPI,
    }}>
      {children}
    </ContextGlobal.Provider>
  );
}

export default GlobalContext;