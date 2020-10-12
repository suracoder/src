import React, {Component} from 'react';
import { Marker, InfoWindow } from "react-google-maps";
import Chat from "./chat"
import MarkerDetail from "./markerDetail"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Selecter from "./configSelecter"
import TrafficLiveUi from "./TrafficLiveUi"
class InfoWindowMap extends Component {

    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            id:""
        }

    }

    handleToggleOpen = (id) => {
console.log("i clicke ",this.state.isOpen)
        this.setState({
            isOpen: true
        });
        this.setState({
         id:id
        });
    }

    handleToggleClose = () => {
        console.log("i cancled ",this.props)
        this.setState({
            isOpen: false
        });
    }


  render() {
console.log("info marker props ",this.props)
let configer=this.props
    return (
            <Marker
                key={this.props.userId}
                position={{ lat: this.props.latitude, lng:this.props.longitude}}
                onDoubleClick ={()=>{console.log("double clicked")
                    this.setState({isOpen:false})}}
                onClick={() => this.handleToggleOpen(this.props.userId)}
            >

            {
                this.state.isOpen &&this.props.userId===this.state.id&&
             <InfoWindow   
             key={this.props.userId}
              onCloseClick={()=>this.setState({isOpen:false})}>
            <TrafficLiveUi  data={this.props}  />
             </InfoWindow >
            }


            </Marker>

        )
  }
}

export default InfoWindowMap;
