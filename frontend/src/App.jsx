import Body from "./components/Body";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MovieDialog from "./components/MovieDialog";

function App() {
  return (
    <BrowserRouter>
      <Body />
      <Toaster />
      <MovieDialog />
    </BrowserRouter>
  );
}

export default App;
