var initial={
    key: "firstStep",
    label: "first step ",
    isDone: true,
    component: 1,
  }
const nextComp = (state = initial, action) => {
    switch (action.type) {
      case "next_component":
        return action.payload;
      default:
        return state;
    }
  };
  export default nextComp;
  