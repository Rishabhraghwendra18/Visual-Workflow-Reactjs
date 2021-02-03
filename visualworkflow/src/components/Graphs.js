import React, { useState, useEffect } from 'react';
import ReactFlow, { Controls, updateEdge, addEdge } from 'react-flow-renderer';
import { useSelector ,connect} from 'react-redux';
import input from '../actions/input';
const initialElements = [
  ]
//   {
//     id: '2',
//     data: { label: 'Node B' },
//     position: { x: 100, y: 200 },
//   },
//   {
//     id: '4',
//     data: { label: 'FFF' },
//     position: { x: 100, y: 300 }
//   },
//   {
//     id: '3',
//     data: { label: 'Node C' },
//     position: { x: 400, y: 200 },
//   },
//   { id: 'e1-2', source: '1', target: '2', label: 'Yes',animated:true },
// ];
function Graphs(props) {
  const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();
  const [elements, setElements] = useState(initialElements);
  // const [state,setState]=useState(useSelector(state => state.nodeReducers))
  
  useEffect(() => {
    if (props.elements.length) {
      console.log("useEffect in", props.elements)
      setElements(els => els.push({
        id: (els.length + 1).toString(),
        type: 'input',
        data: props.elements.data,
        position: props.elements.position
      }));
      return;
    }
    // setElements(props.elements);
    console.log("outside if ",props.elements)
  }, [props.elements.length])
  // gets called after end of edge gets dragged to another source or target
  const onEdgeUpdate = (oldEdge, newConnection) =>
    setElements((els) => updateEdge(oldEdge, newConnection, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  return (
    <ReactFlow
      elements={elements}
      onLoad={onLoad}
      snapToGrid
      onEdgeUpdate={onEdgeUpdate}
      onConnect={onConnect}
      onClick={(e) => console.log(e.target.getAttribute("data-id"))} //to get data-id
    >
      {console.log("in main", props.elements)}
      <Controls />
      <p>hello props {props.elements.length}</p>
    </ReactFlow>

  )
}
const mapStateToProps=state=>{
  return{
    elements:state.nodeReducers
  }
}
const mapDisptachToProps=dispatch=>{
  return{
    nodedispatch:()=>dispatch(input())
  }
}
export default connect(mapStateToProps,mapDisptachToProps)(Graphs);