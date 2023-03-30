import "./App.css";
import RoutesMain from "../src/routes/index.tsx";
import { AuthProvider } from "./contexts/AuthContexts.js";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;
