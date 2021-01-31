import React from 'react'
import '../styles/compoStyles/PaletteDiv.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { FormControl, NativeSelect, TextField, Button, InputBase } from '@material-ui/core';
function PaletteDiv() {
      const BootstrapInput = withStyles((theme) => ({
            root: {
                  'label + &': {
                        marginTop: theme.spacing(3),
                  },
            },
            input: {
                  borderRadius: 4,
                  position: 'relative',
                  backgroundColor: theme.palette.background.paper,
                  border: '1px solid #ced4da',
                  fontSize: 16,
                  padding: '10px 26px 10px 12px',
                  transition: theme.transitions.create(['border-color', 'box-shadow']),
                  // Use the system font instead of the default Roboto font.
                  fontFamily: [
                        '-apple-system',
                        'BlinkMacSystemFont',
                        '"Segoe UI"',
                        'Roboto',
                        '"Helvetica Neue"',
                        'Arial',
                        'sans-serif',
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                  ].join(','),
                  '&:focus': {
                        borderRadius: 4,
                        borderColor: '#80bdff',
                        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
                  },
            },
      }))(InputBase);
      const useStyles = makeStyles((theme) => ({
            margin: {
                  margin: theme.spacing(1),
                  width: "88%"
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
                  width: "90%"
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
                        <TextField id="outlined-basic" className={css.inputfield} variant="outlined" />
                        <label >Trigger</label>
                        <FormControl className={classes.margin}>
                              <NativeSelect
                                    id="demo-customized-select-native"
                                    value={"age"}
                                    onChange={"handleChange"}
                                    input={<BootstrapInput />}
                              >
                                    <option aria-label="None" value="Select" >Select</option>
                                    <option value={10}>When a subscriber joins a list</option>
                                    <option value={20}>The anniversary of a date</option>
                              </NativeSelect>
                        </FormControl>
                  </div>
            </div>
      )
}

export default PaletteDiv
