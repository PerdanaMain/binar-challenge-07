import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer";

const store = configureStore({ reducer }, compose(applyMiddleware(thunk)));

export default store;
