import React ,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button"
import SocketContext from './SocketContext'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function NativeSelects(props) {
    const classes = useStyles();
    const socket = useContext(SocketContext)

    const [dFValue, setDfValue] = React.useState(props.data.distanceFilter);
    const [intervalValue, setIntvrl] = React.useState(props.data.interval);
    const [androidProvider, setAProvider] = React.useState(props.data.androidProvider)
    const [fastestInt, setFastInt] = React.useState(props.data.fastestInterval)
    const dfChange = (event) => {
console.log("waaaaaa ",event.target.value)
        setDfValue(event.target.value);
    };

    const intrChange = (event) => {
        setIntvrl(event.target.value)
    }
    const aProvChange = (event) => {
        setAProvider(event.target.value)
    }
    const fIntrvalChange=(event)=>{
        setFastInt(event.target.value)
    }


    let distance = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500]
    let interval = [50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
    let distanceInfo = `The minimum distance in meters that
   the device location needs to change before the location update callback in your app is called.
    Defaults to 0 for no filtering.`
    console.log("pops on selecter ", props)
    return (
        <div>






            <FormControl className={classes.formControl}>
                <Tooltip title={distanceInfo}>
                    <InputLabel htmlFor="uncontrolled-native">distanceFilter</InputLabel>
                </Tooltip>
                <NativeSelect
                    onChange={dfChange}

                    defaultValue={props.data.distanceFilter}
                    inputProps={{
                        name: "name",
                        id: 'uncontrolled-native',
                    }}
                >

                    <option value={props.data.distanceFilter}>{props.data.distanceFilter}</option>
                    {distance.map(i => <option value={i}>{i} Meters</option>)

                    }

                </NativeSelect>
                <FormHelperText>Uncontrolled</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="uncontrolled-native">androidProvider</InputLabel>
                <NativeSelect
                onChange={aProvChange}
                    defaultValue={props.data.androidProvider}
                    inputProps={{
                        name: 'name',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={props.data.androidProvider}>{props.data.androidProvider}</option>

                    <option value='builtin'>builtin</option>
                    <option value='auto'>auto</option>
               
                </NativeSelect>
                <FormHelperText>Uncontrolled</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="uncontrolled-native">interval</InputLabel>
                <NativeSelect
                    onChange={intrChange}
                    defaultValue={props.data.interval}
                    inputProps={{
                        name: 'name',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={props.data.interval}>{props.data.interval}</option>
                    {
                        interval.map(i => <option value={i} >{i} Milliseconds </option>)}

                </NativeSelect>
                <FormHelperText>Uncontrolled</FormHelperText>
            </FormControl><FormControl className={classes.formControl}>
                <InputLabel htmlFor="uncontrolled-native">fastestInterval</InputLabel>
                <NativeSelect
                onChange={fIntrvalChange}
                    defaultValue={props.data.fastestInterval}
                    inputProps={{
                        name: 'name',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={props.data.fastestInterval}>{props.data.fastestInterval}</option>
                    {
                        interval.map(i => <option value={i} >{i} Milliseconds </option>)}

                </NativeSelect>
                <FormHelperText>Uncontrolled</FormHelperText>
            </FormControl>

            <Button onClick={()=>{

                let data={
                    userId:props.data.userId,
                    config:{
                        distanceFilter:Number(dFValue),
                        interval:Number(intervalValue),
                        androidProvider:androidProvider,
                        fastestInterval:Number(fastestInt)
                    }
                }
                console.log("final data ",data)
                socket.emit("configChange",{data:data})
                console.log("all data",dFValue,intervalValue,androidProvider,fastestInt)
            }}>change</Button>
        </div>
    );
}
