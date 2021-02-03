const nodeReducers=(state=[],action)=>{
      switch (action.type) {
            case "ADD":
                  // state=[...state,action.NodeData]
                  console.log("in node reducers",state)
                  return [...state,action.NodeData];
            default:
                  return state;
      }
}
export default nodeReducers;