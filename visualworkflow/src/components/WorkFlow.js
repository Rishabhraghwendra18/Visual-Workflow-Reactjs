import React from 'react';
import '../styles/compoStyles/WorkFlow.css';
import { TextField, Select, MenuItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
function WorkFlow() {
      const styles = {
            root: {
                  float: "left",
                  margin:"auto"
            },
            cancel: {
                  float: "right",
                  margin:"auto"
            }
      }
      const useStyles = makeStyles(styles);
      const classes = useStyles();
      return (
            <div className="workflow">
                  <div className="title">
                        <h1>It's workflow</h1>
                  </div>
                  <div className="form">
                        <div>
                              <label >WorkFlow Name</label>
                              {/* <input type="text" name="nam" id="nn"/> */}
                              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                              <label >Trigger</label>
                              {/* <input type="text" name="nam" id="nn"/> */}
                              <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={"age"}
                                    onChange={"handleChange"}
                                    label="Age"
                              >
                                    <MenuItem value="">
                                          <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                              </Select>
                        </div>

                        <div className="functions">
                              <Button variant="contained" id="save_button" color="primary" className={classes.root}>
                                    Save
                        </Button>
                              <Button variant="contained" id="cancel_button" color="primary" className={classes.cancel}>
                                    Cancel
                        </Button>
                        </div>
                  </div>
            </div>
      )
}

export default WorkFlow
