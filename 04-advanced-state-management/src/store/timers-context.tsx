import { type ReactNode, createContext } from "react";

interface Timer {
  name: string;
  duration: number;
}

interface TimersState {
  isRunning: boolean;
  timers: Timer[];
}

interface TimersContextValue extends TimersState {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
}

const TimersContext = createContext<TimersContextValue | null>(null);

interface TimersContextProviderProps {
  children: ReactNode;
}

const TimersContextProvider: React.FC<TimersContextProviderProps> = ({ children }) => {
  const contextValue: TimersContextValue = {
    isRunning: false,
    timers: [],
    addTimer: (timerData) => {},
    startTimers: () => {},
    stopTimers: () => {},
  };

  return <TimersContext.Provider value={contextValue}>{children}</TimersContext.Provider>;
};

export default TimersContextProvider;
