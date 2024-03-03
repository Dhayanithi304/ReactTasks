import "./App.css";
import AppRouter from "./AppRouter";
import { Provider } from "./Context";
import D from "./D";


function App() {
  return (   
    <Provider>
      <AppRouter />
    </Provider>
    //<D />
  );
}

export default App;
