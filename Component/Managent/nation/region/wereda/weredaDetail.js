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
// import SurafelTable from "./table"
import { Redirect, useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
// import ManagerProfile from "./managerProfile"
import { withRouter } from 'react-router-dom';
import WeredaEmployee from "./weredaEmployee"
import WeredaTraffic from "./weredaTraffic"
import { fetchWeredaEmployee,fetchWeredaTraffic,makeNullWeredaEmployee,makeNullWeredaTraffic } from "../../../../../Action/index"
import { useSelector, useDispatch } from 'react-redux';
import ManagerProfile from "../../../managerProfile"
// import ZoneTrafficTable from "./zoneTrafficTable"
// import Map from "../../../../map"
import Map from "../../../../map"
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
        // this.props.makeNullWE()
        // this.props.makeNullWT()

        console.log("########componenet didd  our ", this.props)
        let zoneId = ""
        let name = this.props.match.params.name
        this.props.getWeredaEmp(name)
        this.props.getWeredaTrf(name)
        console.log("&&&&&&&&&& zone props", this.props)
    }
    render() {
        const { classes } = this.props;
        let name = this.props.match.params.name
        console.log("zone detail ", this.props.match.params.name)
        console.log("zone array", this.props.regionData.region)
        var foundValue = this.props.regionData.region.filter(obj => obj.name === "amharaOromr");
        let zoneData = []
        let innerValue = [];
        let managerProfile=[]
        console.log("@TEDY @ AFRO ",name)
        this.props.regionData.region.map((i) => {
            //    zoneData=i.zones
            i.zones.map((j) => {
              
                j.weredas.map(o=>{
                    if(name===o.name){
                        managerProfile={
                            name:`${o.weredaManager.user.firstName}  ${o.weredaManager.user.lastName}`,
                            image:'https://placeimg.com/150/150/any',
                            id:o.weredaManager.user.id,
                            role:"Wereda Manager",
                            email:o.weredaManager.user.email
                        }
                        console.log("~~~wereda~~~~~~~~~~~~~~~~~",o)
                    }
                              
                            })
 
            })
       
            
            //  console.log("zone region ",i.zones)
        })
        console.log("$%$%$%$% ", this.props.weredaEmployee.weredaEmployee)
        this.props.weredaEmployee.weredaEmployee.map(i => console.log("p=>", i))
        console.log("inner value zone ", innerValue)
        console.log("zone fround ", zoneData)
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


                    <Grid item xs={3}>
                        {/* <Paper className={classes.paper}> */}
                        <ManagerProfile  {...managerProfile} />

                        {/* </Paper> */}
                    </Grid>
                    <Grid style={{ position: 'relative', height: '60vh' }} item xs={9} >
                        {/* <Map /> */}
                    </Grid>
                    <Grid item xs={9} >
                        {/* <SurafelTable {...innerValue} /> */}
                    </Grid>
                    <Grid item xs={3} >
                        {/* <SurafelTable {...innerValue} /> */}
                    </Grid>
                    <Grid item xs={12} >
                        <WeredaEmployee />
                    </Grid>
                    <Grid item xs={12} >
                        <WeredaTraffic name={name} />
                    </Grid>


                </Grid>

            </div>

        )
    }


}

const mapStateToProps = state => ({

    regionData: state.regionData,
    weredaEmployee: state.weredaEmployee
})
const mapDispatchToProps = dispatch => ({
    getWeredaEmp: (name) => dispatch(fetchWeredaEmployee (name)),
    getWeredaTrf:(name)=>dispatch(fetchWeredaTraffic(name)),
    makeNullWE:()=>dispatch(makeNullWeredaEmployee()),
    makeNullWT:()=>dispatch(makeNullWeredaTraffic())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ZoneDetail)))

