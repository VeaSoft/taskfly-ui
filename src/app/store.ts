import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import rootReducer from "./RootReducer"

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
