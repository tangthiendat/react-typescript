import { type ReactNode, createContext, useContext, useReducer } from "react";

export interface Timer {
  name: string;
  duration: number;
}

interface TimersState {
  isRunning: boolean;
  timers: Timer[];
}

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

interface TimersContextValue extends TimersState {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
}

const TimersContext = createContext<TimersContextValue | null>(null);

interface TimersContextProviderProps {
  children: ReactNode;
}

interface AddTimerAction {
  type: "ADD_TIMER";
  payload: Timer;
}

interface StartTimersAction {
  type: "START_TIMERS";
}

interface StopTimersAction {
  type: "STOP_TIMERS";
}

type Action = AddTimerAction | StartTimersAction | StopTimersAction;

function timersReducer(state: TimersState, action: Action): TimersState {
  switch (action.type) {
    case "ADD_TIMER":
      return {
        ...state,
        timers: [...state.timers, { name: action.payload.name, duration: action.payload.duration }],
      };
    case "START_TIMERS":
      return { ...state, isRunning: true };
    case "STOP_TIMERS":
      return { ...state, isRunning: false };
    default:
      throw new Error("Unknown action type");
  }
}

const TimersContextProvider: React.FC<TimersContextProviderProps> = ({ children }) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const contextValue: TimersContextValue = {
    isRunning: timersState.isRunning,
    timers: timersState.timers,
    addTimer: (timerData) => {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers: () => {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers: () => {
      dispatch({ type: "STOP_TIMERS" });
    },
  };

  return <TimersContext.Provider value={contextValue}>{children}</TimersContext.Provider>;
};

function useTimersContext() {
  const context = useContext(TimersContext);
  if (!context) {
    throw new Error("useTimers must be used within a TimersContextProvider");
  }
  return context;
}

export { TimersContextProvider, useTimersContext };
