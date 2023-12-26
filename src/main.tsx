import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import store from "./app/store"
import "rsuite/dist/rsuite.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <ToastContainer />
      <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
)
