import { useRef } from "react";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input id="name" label="Your name" ref={input} />
    </main>
  );
}

export default App;
