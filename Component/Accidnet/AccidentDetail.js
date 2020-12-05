import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Vertica from "./VerticalStepper"
import { Redirect, useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import FatalInjuryCard from "./FatalInjuryCard"
import MediumInjury from "./MediumInjury"
import SlightInjury from "./SlightInjury"
import DeathInjury from "./DeathInjury"
import { withRouter } from 'react-router-dom';
import DriveDetail from "./DriveDetalCard"
// import { fetchZoneEmployee,fetchZoneTraffic } from "../../../../../Action/index"
import TechinicalDetail from "./TechinicalDetail"
import { useSelector, useDispatch } from 'react-redux';
import InjuryChart from "./InjuryChart"
// import Map from "../../../../map"
import VehicleDetail from "./VehicleDetail"
import TechnicalDetail from "./TechinicalDetail"
import CasulaDetail from "./CasualDeatil"
// import AccidentChangeTree from "./AccidentChangeTree"
import AccdientCricle from "./AccidentCircle"
import Map from "./AccidnetDetailMap"
import Editable from "./EditableTable"
const styles = (theme) => ({

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
})
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

class ZoneDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let id = this.props.match.params.id
        // var foundValue = this.props.getAccident.aData.filter(obj =>{ 
        //     console.log("my accidnet ",obj)
        //     obj.id ==id});
        var accident = this.props.getAccident.aData.map(i => console.log('&&&=> ', i))
        // console.log("accidnet detail",foundValue)


    }
    render() {
        const { classes } = this.props;
        let id = this.props.match.params.id

        let zoneData = []
        let innerValue = [];
        let zoneManager = ""
        const data = [
            
              
          
           
          ];
        var foundValue = this.props.getAccident.aData.filter(obj => obj.id == id);
        console.log("||||||||||||||||||||||||||| ",foundValue)
        foundValue.map(i=>{
             
            data.push({
                type:"fatal injury",
                value:i.fatal_injury
            },
            {
                type:"slight injury",
                value:i.slight_injury
            },
            {
                type:"death injury",
                value:i.death
            },
            {
                type:"medium injury",
                value:i.medium_injury
            }
           
            )
        })
        
         
        
        console.log("found ", foundValue)

        return (

            <div>

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/" onClick={handleClick}>
                                Material-UI
                                                          </Link>
                            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                                Core
        </Link>
                            <Link
                                color="textPrimary"
                                href="/components/breadcrumbs/"
                                onClick={handleClick}
                                aria-current="page"
                            >
                                Breadcrumb
        </Link>
                        </Breadcrumbs>
                        {/* <Paper className={classes.paper}>xs=12</Paper> */}
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <FatalInjuryCard  data= {foundValue}/>
                        {/* <InjuryChart/> */}

                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <MediumInjury   data={foundValue}/>

                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <SlightInjury  data={foundValue} />

                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <DeathInjury  data={foundValue}/>

                    </Grid>
                     
                    <Grid item xs={12} md={4} sm={6} >
                    {/* <Grid container spacing={2}> */}
                     {/* <Grid> */}
                     {/* <DriveDetail data={foundValue}/> */}
                     {/* </Grid> */}
                {/* <Grid  style={{marginRight:50}}> */}
                {/* <SlightInjury  {...foundValue} /> */}
                <Paper><AccdientCricle id={data} /></Paper>
                
                {/* </Grid> */}
{/* </Grid> */}
                    </Grid>
                    <Grid item xs={12} md={4} sm={6} >
                    <VehicleDetail data={foundValue}/>

                        {/* <SurafelTable {...innerValue} /> */}
                    </Grid>
                    <Grid item xs={4} style={{ position: 'relative', height: '60vh' }}>
                    {/* <Map/> */}
                     </Grid>
                    <Grid item xs={12} md={4} sm={6}  >
<TechinicalDetail  data={foundValue}/>
                        {/* <SurafelTable {...innerValue} /> */}
                    </Grid>
                    
                    <Grid item xs={12} md={8} sm={6}  >
                        {/* <ZoneTrafficTable /> */}
                        <CasulaDetail id={id}/>
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}  >
                        {/* <ZoneTrafficTable /> */}
                        {/* <AccdientCricle /> */}
                    </Grid>
                    <Grid item xs={12} md={12} sm={6}  >
                        {/* <ZoneTrafficTable /> */}
                        <Editable id={id}/>
                    </Grid>

                </Grid>

            </div>

        )
    }


}

const mapStateToProps = state => ({

    regionData: state.regionData,
    zoneEmployee: state.zoneEmployee,
    getAccident: state.getAccident
})
const mapDispatchToProps = dispatch => ({
    // getZoneEmp: (name) => dispatch(fetchZoneEmployee(name)),
    // getZoneTrf:(name)=>dispatch(fetchZoneTraffic(name))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ZoneDetail)))

