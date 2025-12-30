import { createContext, useContext, useState } from "react";

const MainContentContext = createContext(null);

export function MainContentProvider({ children }) {
//   const [mainContent, setMainContent] = useState(null);
//   const [viewType, setViewType] = useState("home"); 
  // e.g. home | playlist | artist | search | podcast

  const [activeView, setActiveView] = useState({
    type: "home",
    id: null,
  });

  return (
    <MainContentContext.Provider
      value={{
        activeView, setActiveView
      }}
    >
      {children}
    </MainContentContext.Provider>
  );
}

export function useMainContent() {
  return useContext(MainContentContext);
}
