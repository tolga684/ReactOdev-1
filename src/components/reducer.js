import I from "immutable";

function reducer(state = I.Map(), action) {
  switch (action.type) {
    case "ADD_CURRENT_INPUT":
      return state.set("currentInput", action.data);
    case "ADD_CURRENT_INPUT_TO_TODOSLIST":
        if (action.data.length !== 0) {
          const list = state.get("todosArray", I.List()).push(action.data);
          state = state.set("currentInput", "");
          return state.set("todosArray", list);
        }
        return state;
    default:
      return state;
  }
}

export default reducer;