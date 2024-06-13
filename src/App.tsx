import RoutesApp from "./routes";
import GlobalContext from "./context/global";
import "./App.css";

const App = () => (
  <GlobalContext>
    <RoutesApp />
  </GlobalContext>
);

export default App;