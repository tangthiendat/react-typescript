import Input from "./components/Input";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }
  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" id="name" label="Name" name="name" />
        <Input type="number" id="age" label="Age" name="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
