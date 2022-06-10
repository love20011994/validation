import reducer from "./reducer"
import rulesreducer from "./rulesreducer"
import nextComp from "./nextComp"; 
import contract from "./contract";
import { combineReducers } from "redux";
const AllReducer = combineReducers({
    reducer:reducer,
    rulesreducer:rulesreducer,
  component:nextComp,
  contract:contract
});
export default AllReducer;
