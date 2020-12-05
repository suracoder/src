import {combineReducers} from "redux"
import userSignIn from "./SignIn"
import permission from "./permissionReducer"
import nationEmpReg from  "./nationEmployeeReg"
import regionReg from "./regionReg"
import zoneReg from "./zoneReg"
import weredaReg from "./weredaReg"
import regionEmpReg from "./regionEmployeeReg"
import zoneEmpReg from "./zoneEmployeeReg"
import weredaEmpReg from "./weredaEmployeeReg"
import weredaTrafficReg from "./weredaTrafficReg"
import zoneTrafficReg from "./zoneTrafficReg"
import isValidate from "./emailValidate"
import regionManager from "./regionManager"
import deletRegionManeger from "./deleteRegionManger"
import regionData from "./getRegionInfo"
import onlineUser from "./getonlineUser"
import conversation from "./getChatConverstaion"
import realPermission from "./realPermissionReducer"
import regionManagerCreate from './createRegionManager'
import weredaEmployee from "./getWeredaEmployee"
import regionEmployee from "./getRegionEmployee"
import { reducer as formReducer } from 'redux-form'
import zoneEmployee from "./getZoneEmployee"
import zoneTraffic from "./getZoneTraffic"
import weredaTraffic from './getWeredaTraffic'
 import zoneData from "./getZone"
 import weredaData from "./getWereda"
 import liveTraffic from "./getLiveTraffic"
 import getHospital from "./createHospital"
 import getAccident from "./getAccident"
 import getProfile from "./getProfile" 
const reducers=combineReducers({
   usersign:userSignIn,
   deletRegionManeger:deletRegionManeger,
   userPermission:permission,
   form: formReducer,
   nationEmpReg,
   regionReg,
   zoneReg,
   weredaReg,
   zoneEmpReg,
   zoneTrafficReg,
   weredaEmpReg,
   weredaTrafficReg,
   regionManager,
   regionData,
   regionEmpReg,
   isValidate,
   onlineUser,
   conversation,
   realPermission,
   regionManagerCreate,
   zoneEmployee,
   weredaEmployee,
   zoneTraffic,
   weredaTraffic,
   regionEmployee,
   zoneData,
   weredaData,
   liveTraffic,
   getHospital,
   getAccident,
   getProfile
})
export default reducers;