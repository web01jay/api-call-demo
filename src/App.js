import './App.css';
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '@popperjs/core/lib/popper'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      
      <Routes />

      <ToastContainer />
    </div>
  );
}

export default App;
