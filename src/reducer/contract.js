const contract = (state = {id:"",enddate:"",category:""}, action) => {
    switch (action.type) {
      case "contract":
        return action.payload;
         
      default:
        return state;
    }
  };
  export default contract;
  