import React, { useState } from 'react'
import '../styles/compoStyles/PaletteDiv.css';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, TextField, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import {  connect } from 'react-redux';
import input from '../actions/input';
function PaletteDiv(props) {
      const [nodename, setNodename] = useState();
      const [nodetype, setNodetype] = useState();
      const [nodevalue, setNodevalue] = React.useState('');

      const handleChange = (event) => {
            setNodevalue(event.target.value);
            setNodetype(event.target.value);
      };

      const useStyles = makeStyles((theme) => ({
            margin: {
                  margin: theme.spacing(1),
                  width: "88%"
            },
            formControl: {
                  margin: theme.spacing(1),
                  minWidth: 120,
            },
            selectEmpty: {
                  marginTop: theme.spacing(2),
            }
      }));

      const styles = {
            saveb: {
                  float: "left",
                  margin: "auto"
            },
            cancelb: {
                  float: "right"
            },
            inputfield: {
                  display: "block",
                  width: "100%",
                  margin: "0"
            }
      }
      const classes = useStyles();
      const useStyle = makeStyles(styles);
      const css = useStyle();
      return (
            <div id="myPaletteDiv">
                  <div className="heading">
                        <h1>Palette</h1>
                  </div>
                  <div className="palette">
                        <label >WorkFlow Name</label>
                        <TextField id="outlined-basic" fullwidth className={css.inputfield} variant="outlined" onChange={e => setNodename(e.target.value)} />
                        <label >Type of Node</label>
                        <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel id="demo-simple-select-outlined-label">Node</InputLabel>
                              <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={nodevalue}
                                    onChange={handleChange}
                                    label="Age"
                              >
                                    <MenuItem value="">
                                          <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Step</MenuItem>
                                    <MenuItem value={20}>Condition</MenuItem>
                              </Select>
                              <Button variant="contained" color="primary" onClick={(e) => {
                                    e.preventDefault();
                                    const node = {
                                          NodeType: nodetype,
                                          NodeValue: nodename
                                    }
                                    props.nodedispatch(node)
                                    console.log("done dispatching")
                              }}>
                                    Add Node
                              </Button>
                        </FormControl>
                  </div>
            </div>
      )
}

const mapStateToProps = state => {
      return {
            elements: state.nodeReducers
      }
}
const mapDisptachToProps = dispatch => {
      return {
            nodedispatch: (node) => dispatch(input(node))
      }
}
export default connect(mapStateToProps, mapDisptachToProps)(PaletteDiv);
