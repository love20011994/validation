const reducers = (state = "default", action) => {
  switch (action.type) {
    case "contractid":
      return action.payload;
    //   break;
    // case "end":
    //     return action.payload;
    //      break;
    default:
      return state;
  }
};
export default reducers;
