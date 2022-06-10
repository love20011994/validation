const endreducer = (state = "default", action) => {
    switch (action.type) {
      case "end":
        return action.payload;
         
      default:
        return false;
    }
  };
  export default endreducer;
  