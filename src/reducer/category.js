const endreducer = (state = "default", action) => {
    switch (action.type) {
      case "contract":
        return action.payload;
         
      default:
        return state;
    }
  };
  export default endreducer;
  