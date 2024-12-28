import { Button } from "./components/button";
import { Input } from "./components/input";

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <form className="flex flex-col gap-4">
          <Input />
          <Button title="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
