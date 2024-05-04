import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../src/store/redux/store"
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root")); //root which is in index.html
root.render(
    <Provider store={store}>
        <App />
        <PersistGate loading={null} persistor={persistor} />
    </Provider>


) //in this it will render our application or app component


