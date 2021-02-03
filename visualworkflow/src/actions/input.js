const input = (obj = {}) => {
      console.log("in action",obj)
      return {
            type: "ADD",
            NodeData: {
                  type: 'input',
                  data: { label: obj.NodeValue },
                  position: { x: 250, y: 0 }
            }
      }
}
export default input;