import { createContext } from "react";

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
