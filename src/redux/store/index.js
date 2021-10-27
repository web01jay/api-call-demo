import { createStore } from "redux";

// import rootReducer from "redux/reducers/rootReducer";
import authReducer from "../reducers/auth/auth.redducers"

const store = createStore(authReducer);

export default store;
