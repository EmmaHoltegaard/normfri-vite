import { createContext, useContext, useMemo, useState } from "react";

const UiContext = createContext(null);

export function UiProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [activeTopicId, setActiveTopicId] = useState(null);

  const value = useMemo(() => ({
    // state
    isLoading,
    menuIsActive,
    activeTopicId,
    // actions
    setIsLoading,
    toggleMenu: () => setMenuIsActive(v => !v),
    toggleInfo: (id) => setActiveTopicId(id),
    closeMenu: () => setMenuIsActive(false),
  }), [isLoading, menuIsActive, activeTopicId]);

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUI must be used within <UiProvider>");
  return ctx;
}