import { createContext, useContext } from "react";
import { useGame } from "../hooks/useGame";

const GameContext = createContext<any>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const game = useGame();

  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
}

export function useGameContext() {
  return useContext(GameContext);
}
