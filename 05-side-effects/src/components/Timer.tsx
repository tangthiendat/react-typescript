import Container from "./UI/Container.tsx";
import { type Timer as TimerProps } from "../store/timers-context.tsx";
import { useEffect, useState } from "react";

const Timer: React.FC<TimerProps> = ({ name, duration }) => {
  const [remainingTime, setRemainingTime] = useState<number>(duration * 1000);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prev) => prev - 50);
    }, 50);
  }, []);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{(remainingTime / 1000).toFixed(2)}</p>
    </Container>
  );
};

export default Timer;
