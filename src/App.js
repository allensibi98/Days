import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import View from "./Components/View";
import { Provider } from "react-redux";
import store from "./configureStore";

function App() {
  return (
    <>
      <Provider store={store} >
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/explore" element={<View />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
