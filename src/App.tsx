import "./App.css";
import { Navbar } from "./navbar";
import { CartContainer } from "./cartContainer";
import { useGlobalContext } from "./context";

const App = () => {
  //
  const context = useGlobalContext();
  const { state } = context;
  const { loading } = state;
  //
  if (loading)
    return (
      <div className="spinnerContainer">
        <div className="spinner">Loading...</div>
      </div>
    );
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
