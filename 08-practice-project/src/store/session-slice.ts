import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Session {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
}

interface SessionState {
  upcomingSessions: Session[];
}

const initialState: SessionState = {
  upcomingSessions: [],
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    bookSession(state, action: PayloadAction<Session>): void {
      const sessionIndex = state.upcomingSessions.findIndex(
        (session) => session.id === action.payload.id
      );
      if (sessionIndex < 0) {
        state.upcomingSessions.push(action.payload);
      }
    },
    cancelSession(state, action: PayloadAction<string>): void {
      state.upcomingSessions = state.upcomingSessions.filter(
        (session) => session.id !== action.payload
      );
    },
  },
});

export const { bookSession, cancelSession } = sessionSlice.actions;
