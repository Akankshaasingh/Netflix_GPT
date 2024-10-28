import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";


console.log("TMDB Key:", process.env.REACT_APP_TMDB_KEY);
console.log("OpenAI Key:", process.env.REACT_APP_OPENAI_KEY);

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
