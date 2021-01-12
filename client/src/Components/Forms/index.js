import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PoopSelect from '../Inputs';
import DateSelector from '../Inputs';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function NewKittenForm(){
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return <form>
    <FormControl>
      <TextField id="standard-required" label="Required" defaultValue="Hello World" />
      <TextField id="standard-required" label="Required" defaultValue="Hello World" />
      <DateSelector />
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
    </FormControl>
  </form>
}
export function NewWeightForm(){
  return <form>
    <DateSelector />
    <TextField
          label="With normal TextField"
          id="standard-start-adornment"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>,
          }}
        />
  </form>
}
export function NewFeedingForm(){
  return <form>
    <DateSelector />
    <TextField
          label="With normal TextField"
          id="standard-start-adornment"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">ml</InputAdornment>,
          }}
        />
        <PoopSelect />
  </form>
}
export function NotificationForm(){}