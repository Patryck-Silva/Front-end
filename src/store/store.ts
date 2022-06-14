import { createStore } from "redux";
import { TokenReducer } from "./tokens/tokensReducer";

const store = createStore(TokenReducer)

export default store 