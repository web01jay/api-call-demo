import "./App.css";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@popperjs/core/lib/popper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginAuthentication } from "./redux/actions/auth/auth.action";

function App() {
  // const history = useHistory();
  const dispatch = useDispatch();

  if ("access_token" in localStorage) {
    dispatch(setLoginAuthentication(true));
    // history.push("/after-login");
    // console.log("Item exists in localstorage");
  } 
  // else {
  //   history.push("/login");
  //   console.log("Item does not exist in localstoarge");
  // }

  return (
    <div className="App">
      <Routes />

      <ToastContainer />
    </div>
  );
}

export default App;
