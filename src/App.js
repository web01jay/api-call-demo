import "@popperjs/core/lib/popper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { setLoginAuthentication } from "./redux/actions/auth/auth.action";
import Routes from "./routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if ("access_token" in localStorage) {
      dispatch(setLoginAuthentication(true));
    }
  }, []);

  return (
    <div className="App">
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
