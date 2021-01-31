import React,{useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

export default function DatePickers() {
  const classes = useStyles();
  const [date,setDate]=useState(null)
  const onChangeHandler=(e)=>{
      setDate(e.target.value)
    console.log(e.target.value)
  }
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        onChange={onChangeHandler}
        defaultValue={new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate())}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}