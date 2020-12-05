import axios from "axios"
import {
    SIGNINSUCCESS,
    SIGNINERROR,
    SIGNININCORRECT,
    SIGNOUT, GETPERMISSION
    , NATIONE_EMP_REG_SUCCESS,
    NATIONE_EMP_REG_ERROR,
    EMAILVALIDATE,
    MAKE_N_E_SPINNER,
    RECEIV_N_E,
    FORM_N_E_SENDCONFIRM,
    REGION_REG_SUCCESS,
    REGION_REG_ERROR,
    RECEIV_R,
    FORM_R_SENDCONFIRM,
    MAKE_R_SPINNER,
    GET_REGION_MANGER,
    DELETE_R_M,
    GET_REGION,
    REGION_EMP_REG_SUCCESS,
    REGION_EMP_REG_ERROR,
    MAKE_R_E_SPINNER,
    RECEIV_R_E,
    FORM_R_E_SENDCONFIRM,
    ZONE_REG_SUCCESS,
    ZONE_REG_ERROR,
    MAKE_Z_SPINNER,
    RECEIV_Z,
    FORM_Z_SENDCONFIRM,
    ZONE_EMP_REG_SUCCESS,
    ZONE_EMP_REG_ERROR,
    MAKE_Z_E_SPINNER,
    RECEIV_Z_E,
    FORM_Z_E_SENDCONFIRM,
    WEREDA_REG_SUCCESS,
    WEREDA_REG_ERROR,
    MAKE_W_SPINNER,
    RECEIV_W,
    FORM_W_SENDCONFIRM,
    GET_ZONE_MANGER,
    ZONE_TRAFFIC_REG_SUCCESS,
    ZONE_TRAFFIC_REG_ERROR,
    MAKE_Z_T_SPINNER,
    RECEIV_Z_T,
    FORM_Z_T_SENDCONFIRM,
    WEREDA_EMP_REG_SUCCESS,
    WEREDA_EMP_REG_ERROR,
    MAKE_W_E_SPINNER,
    RECEIV_W_E,
    FORM_W_E_SENDCONFIRM,
    WEREDA_TRAFFIC_REG_SUCCESS,
    WEREDA_TRAFFIC_REG_ERROR,
    MAKE_W_T_SPINNER,
    RECEIV_W_T,
    FORM_W_T_SENDCONFIRM,
    GET_ONLINE_USER,
    GET_CONVERSATION,
    GET_CONV_ERROR,
    ON_CONV_START,
    SEND_MESSAGE,
    SEND_MESSAGE_ERROR,
    GET_REAL_PERMISSION,
    REGION_MNG_REG_SUCCESS,
    REGION_MNG_REG_ERROR,
    MAKE_R_M_SPINNER,
    RECEIV_R_M,
    FORM_R_M_SENDCONFIRM,
    GET_ZONE_EMPLOYEE,
    GET_WEREDA_EMPLOYEE,
    GET_ZONE_TRAFFIC,
    GET_WEREDA_TRAFFIC,
    GET_REGION_EMPLOYEE,
    GET_ZONE,
    MAKE_NULL_ZT,
    MAKE_NULL_ZE,
    MAKE_NULL_Z,
    MAKE_NULL_WT,
    MAKE_NULL_WE,
    GET_WEREDA,
    MAKE_NULL_W,
    GET_LIVE_TRAFFIC,
    HOSPITAL_REG_SUCCESS,
    HOSPITAL_REG_ERROR,
    MAKE_H_SPINNER,
    RECEIV_H,
    FORM_H_SENDCONFIRM,
    CREATE_HOSPITAL,
    RESET_HOSPITAL,
    GET_ACCIDENT,
    GET_PROFILE

} from "./type"
axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
        return config
    }
)
const ip = 'localhost'

export const setProfile =(profile,error)=>{
    return {
        type: GET_PROFILE,
       profile,
        error
    }
}
export const fetchProfile = () => {
    return (dispatch) => {

 
        return axios.get(`http://${ip}:3333/api/user/getProfile`).
            then(response => {

                // dispatch(setAccidnet(response.data, null))
                dispatch(setProfile(response.data,null ))

            }
            ).
            catch(error => {

                dispatch(setAccidnet([],error.message))
            });
    }
}
export const setAccidnet = (success,
    aData,
    isLoading,
    error) => {
    return {
        type: GET_ACCIDENT,
        success,
        aData,
        isLoading,
        error
    }
}
export const fetchAccidnet = () => {
    return (dispatch) => {


dispatch(setAccidnet(null,[],true,null))
        return axios.get(`http://${ip}:3333/api/accident/getAccidnetByZoneId`).
            then(response => {

                // dispatch(setAccidnet(response.data, null))
                dispatch(setAccidnet(true,response.data,false,null))

            }
            ).
            catch(error => {

                dispatch(setAccidnet(false,[],false,error.message))
            });
    }
}
export const resetHospital = (success, rData, isLoading, error) => {
    return {
        type: RESET_HOSPITAL,
        success,
        rData,
        isLoading,
        error
    }
}
export const setHospital = (success, rData, isLoading, error) => {
    return {
        type: CREATE_HOSPITAL,
        success,
        rData,
        isLoading,
        error
    }
}
export const createHospital = (name, type, phone_no, lat, lng, firstName, lastName, email, password, userAddress) => {

    return (dispatch) => {

        let params = {
            name: name,
            type: type,
            phone_no,
            lat,
            lng,
            firstName: firstName,
            lastName: lastName,

            email: email,
            password: password,
            userAddress: userAddress
        }
        dispatch(setHospital(null, null, true, null));

        return axios.post(`http://${ip}:3333/api/hospital/createHospitalAccountByZone`, params).
            then(response => {
                // console.log("this is", response)

                if (response.data.hasOwnProperty("success")) {
                    console.log(response.data)
                    dispatch(setHospital(true, response.data, false, false));

                }

                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    console.log("rrrrr", response.data)
                    dispatch(setHospital(false, null, false, response.data));


                }
            }).
            catch(error => {
                console.log("dddd", error)
                dispatch(setHospital(false, null, false, error.message));

            });
    }
}
export const hospitalReg = (isRegister) => {
    console.log("dgfgfgdf")
    return {
        type: HOSPITAL_REG_SUCCESS,
        isRegister
    }
}
export const make_h_spinner = (isLoading) => {
    return {
        type: MAKE_H_SPINNER,
        isLoading
    }
}
export const getHospitalData = (hospita) => {
    return {
        type: RECEIV_H,
        hospita
    }
}
export const form_h_SendConfirm = (confirm) => {
    return {
        type: FORM_H_SENDCONFIRM,
        confirm
    }
}
// api call for wereda employee
export const createHospitals = (firstName, lastName, email, password, userAddress) => {

    return (dispatch) => {

        let params = {
            firstName: firstName,
            lastName: lastName,

            email: email,
            password: password,
            userAddress: userAddress
        }
        dispatch(make_h_spinner(true));

        return axios.post(`http://${ip}:3333/api/hospital/createHospitalAccountByZone`, params).
            then(response => {
                console.log("this is", response)

                if (response.data.hasOwnProperty("success")) {
                    console.log(response.data)

                    dispatch(hospitalReg(true))
                    dispatch(make_h_spinner(false));
                    dispatch(getHospitalData(response.data.user))
                }

                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    dispatch(make_h_spinner(false));
                    dispatch(hospitalReg(false));

                }
            }).
            catch(error => {

                dispatch(hospitalReg(false));
                // dispatch(make_w__spinner(false));
            });
    }
}
//  get live traffic postion with phone configration

export const setLiveTrafficData = (data, error) => {
    return {
        type: GET_LIVE_TRAFFIC,
        data,
        error
    }
}
export const fetchLiveTraffic = () => {
    return (dispatch) => {



        return axios.get(`http://${ip}:3333/api/traffic/getLiveTraffic`).
            then(response => {

                dispatch(setLiveTrafficData(response.data, null))

            }
            ).
            catch(error => {

                dispatch(setLiveTrafficData(null, error))
            });
    }
}

// end
// @@@@@@@@@@ send message @@@@@@@@@

export const messageSendSuccess = (send) => {
    return {
        type: SEND_MESSAGE,
        send
    }
}
export const messageSendError = (error) => {
    return {
        type: SEND_MESSAGE_ERROR,
        error
    }
}
export const sendMessageToApi = (message, receiverId) => {

    return (dispatch) => {
        let params = {
            message: message,
            receiverId: receiverId
        }


        return axios.post(`http://${ip}:3333/api/chat/createChat`, params).
            then(response => {

                dispatch(messageSendSuccess(true))

            }
            ).
            catch(error => {

                dispatch(messageSendError(error.message));
            });
    }
}
//@@@@@@@@@@@@ END SEND MESSAGE @@@@@@@@@@
// @@@@@@@@@@@@@@@@ get chat Conversaion actions @@@@@@@@@@@
export const getChatconversation = (conversation) => {
    return {
        type: GET_CONVERSATION,
        conversation
    }
}
export const getChatconversationError = (error) => {
    return {
        type: GET_CONV_ERROR,
        error
    }
}
export const getChatconversationOnStart = (isLoading) => {
    return {
        type: ON_CONV_START,
        isLoading

    }
}


export const fetchConversation = (id) => {

    return (dispatch) => {
        let params = {
            id: id
        }
        getChatconversationOnStart(true)

        return axios.post(`http://${ip}:3333/api/chat/getConversation`, params).
            then(response => {

                dispatch(getChatconversation(response.data))

            }
            ).
            catch(error => {

                dispatch(getChatconversationError(error.message));
            });
    }
}
// @@@@@@@@@@@@@@@@@@@@@END CONVERSATION@@@@@@@@@@@@@@@@@@



export const signInActionSuccess = (data) => {
    return {
        type: SIGNINSUCCESS,
        data

    }
};
export const signInActionincorrect = (data) => {
    return {
        type: SIGNININCORRECT,
        data

    }


}
export const signInActionError = (error) => {
    return {
        type: SIGNINERROR,
        error
    }
}
export const signOut = () => {
    return {
        type: SIGNOUT
    }
}

export const fetchSignIn = (email, password) => {
    console.log("this is sgnin dispatch ", email, password);
    return (dispatch) => {

        let params = {
            email: email,
            password: password
        }

        return axios.post(`http://${ip}:3333/api/user/signIn`, params).
            then(response => {
                console.log("on respond:  ", response)
                // response data have valid toke 
                if (response.data.hasOwnProperty("token"))
                    dispatch(signInActionSuccess(response.data))
                console.log(response.data)
                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    dispatch(signInActionincorrect(response.data));
                    console.log("errrrrrr")
                }
            }).
            catch(error => {
                console.log("error happen :", error.message)
                dispatch(signInActionError(error.message));
            });
    }
}
// make true or false for region
export const regionReg = (isRegister) => {
    console.log("dgfgfgdf")
    return {
        type: REGION_REG_SUCCESS,
        isRegister
    }
}
export const make_r_spinner = (isLoading) => {
    return {
        type: MAKE_R_SPINNER,
        isLoading
    }
}
export const getRegionData = (region) => {
    return {
        type: RECEIV_R,
        region
    }
}
export const form_r_SendConfirm = (confirm) => {
    return {
        type: FORM_R_SENDCONFIRM,
        confirm
    }
}
//// create region with region manger 
export const createRegion = (regionName, firstName, lastName, email, password, userAddress) => {

    return (dispatch) => {

        let params = {
            firstName: firstName,
            lastName: lastName,

            email: email,
            password: password,
            userAddress: userAddress,
            name: regionName
        }
        dispatch(make_r_spinner(true));
        return axios.post(`http://${ip}:3333/api/nation/createRegion`, params).
            then(response => {
                console.log("this is", response)

                if (response.data.hasOwnProperty("success")) {
                    console.log(response.data)

                    dispatch(regionReg(true))
                    dispatch(make_r_spinner(false));
                    dispatch(getRegionData(response.data.user))
                }

                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    dispatch(make_r_spinner(false));
                    dispatch(regionReg(false));

                }
            }).
            catch(error => {

                dispatch(regionReg(false));
                dispatch(make_r_spinner(false));
            });
    }
}
/////////create zone with manger /////////////////////
export const zoneReg = (isRegister) => {
    console.log("dgfgfgdf")
    return {
        type: ZONE_REG_SUCCESS,
        isRegister
    }
}
export const make_z_spinner = (isLoading) => {
    return {
        type: MAKE_Z_SPINNER,
        isLoading
    }
}
export const getZoneData = (region) => {
    return {
        type: RECEIV_Z,
        region
    }
}
export const form_z_SendConfirm = (confirm) => {
    return {
        type: FORM_Z_SENDCONFIRM,
        confirm
    }
}

export const createZone = (zoneName, firstName, lastName, email, password, userAddress) => {

    return (dispatch) => {

        let params = {
            firstName: firstName,
            lastName: lastName,

            email: email,
            password: password,
            userAddress: userAddress,
            name: zoneName
        }
        dispatch(make_z_spinner(true));
        return axios.post(`http://${ip}:3333/api/region/createZone`, params).
            then(response => {
                console.log("this is", response)

                if (response.data.hasOwnProperty("success")) {
                    console.log(response.data)

                    dispatch(zoneReg(true))
                    dispatch(make_z_spinner(false));
                    dispatch(getZoneData(response.data.user))
                }

                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    dispatch(make_z_spinner(false));
                    dispatch(zoneReg(false));

                }
            }).
            catch(error => {

                dispatch(zoneReg(false));
                dispatch(make_z_spinner(false));
            });
    }
}
///////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////
// make true or false for nation employee
export const nationEmpReg = (isRegister) => {
    console.log("dgfgfgdf")
    return {
        type: NATIONE_EMP_REG_SUCCESS,
        isRegister
    }
}
export const make_n_e_spinner = (isLoading) => {
    return {
        type: MAKE_N_E_SPINNER,
        isLoading
    }
}
export const getNationEmployeeData = (employee) => {
    return {
        type: RECEIV_N_E,
        employee
    }
}
export const form_n_e_SendConfirm = (confirm) => {
    return {
        type: FORM_N_E_SENDCONFIRM,
        confirm
    }
}
export const createNationEmployee = (firstName, lastName, email, password, userAddress) => {

    return (dispatch) => {

        let params = {
            firstName: firstName,
            lastName: lastName,

            email: email,
            password: password,
            userAddress: userAddress
        }
        dispatch(make_n_e_spinner(true));
        return axios.post(`http://${ip}:3333/api/nation/createNationEmp`, params).
            then(response => {
                console.log("this is")

                if (response.data.hasOwnProperty("success")) {
                    console.log(response.data)

                    dispatch(nationEmpReg(true))
                    dispatch(make_n_e_spinner(false));
                    dispatch(getNationEmployeeData(response.data.user))
                }

                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    dispatch(make_n_e_spinner(false));
                    dispatch(nationEmpReg(false));

                }
            }).
            catch(error => {

                dispatch(nationEmpReg(false));
                dispatch(make_n_e_spinner(false));
            });
    }
}
/////////////////////////////////////////////////////////////////////////////////////
// region employee registration
export const regionEmpReg = (isRegister) => {
    console.log("dgfgfgdf")
    return {
        type: REGION_EMP_REG_SUCCESS,
        isRegister
    }
}
export const make_r_e_spinner = (isLoading) => {
    return {
        type: MAKE_R_E_SPINNER,
        isLoading
    }
}
export const getRegionEmployeeData = (employee) => {
    return {
        type: RECEIV_R_E,
        employee
    }
}
export const form_r_e_SendConfirm = (confirm) => {
    return {
        type: FORM_R_E_SENDCONFIRM,
        confirm
    }
}
export const createRegionEmployee = (firstName, lastName, email, password, userAddress) => {

    return (dispatch) => {

        let params = {
            firstName: firstName,
            lastName: lastName,

            email: email,
            password: password,
            userAddress: userAddress
        }
        dispatch(make_r_e_spinner(true));
        return axios.post(`http://${ip}:3333/api/region/createRegionEmp`, params).
            then(response => {
                console.log("this is", response)

                if (response.data.hasOwnProperty("success")) {
                    console.log(response.data)

                    dispatch(regionEmpReg(true))
                    dispatch(make_r_e_spinner(false));
                    dispatch(getRegionEmployeeData(response.data.user))
                }

                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    dispatch(make_r_e_spinner(false));
                    dispatch(regionEmpReg(false));

                }
            }).
            catch(error => {

                dispatch(regionEmpReg(false));
                dispatch(make_r_e_spinner(false));
            });
    }
}

/////////////////////////////////////////////////////////////////////////////

// @@@@@@@@@@@@@ create region manager /////
export const regionMgrError = (error) => {
    return {
        type: REGION_MNG_REG_ERROR,
        error
    }
}
export const regionMgrReg = (isRegister, error) => {
    console.log("dgfgfgdf")
    return {
        type: REGION_MNG_REG_SUCCESS,
        isRegister,
        error
    }
}
export const make_r_m_spinner = (isLoading) => {
    return {
        type: MAKE_R_M_SPINNER,
        isLoading
    }
}
export const getRegionManagerData = (employee) => {
    return {
        type: RECEIV_R_M,
        employee
    }
}
export const form_r_m_SendConfirm = (confirm) => {
    return {
        type: FORM_R_M_SENDCONFIRM,
        confirm
    }
}
export const createRegionManager = (regionId, firstName, lastName, email, password, userAddress) => {

    return (dispatch) => {

        let params = {
            regionId: regionId,
            firstName: firstName,
            lastName: lastName,

            email: email,
            password: password,
            userAddress: userAddress
        }
        dispatch(make_r_m_spinner(true));
        return axios.post(`http://${ip}:3333/api/nation/createRegionManger`, params).
            then(response => {
                console.log("this is", response)

                if (response.data.hasOwnProperty("success")) {
                    console.log(response.data)

                    dispatch(regionMgrReg(true, null))
                    dispatch(make_r_m_spinner(false));
                    setTimeout(() => {
                        dispatch(getRegionManagerData(response.data.user))
                    }, 3000)
                }

                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    dispatch(make_r_m_spinner(false));
                    dispatch(regionMgrReg(false, response.data));
                    // dispatch(regionMgrError(response.data))
                }
            }).
            catch(error => {

                dispatch(regionMgrReg(false));
                dispatch(make_r_m_spinner(false));
            });
    }
}

//////////end create region manger /////
////// create zone employee ///////////@@@@@@@@@22
export const zoneEmpReg = (isRegister) => {
    console.log("dgfgfgdf")
    return {
        type: ZONE_EMP_REG_SUCCESS,
        isRegister
    }
}
export const make_z_e_spinner = (isLoading) => {
    return {
        type: MAKE_Z_E_SPINNER,
        isLoading
    }
}
export const getZoneEmployeeData = (employee) => {
    return {
        type: RECEIV_Z_E,
        employee
    }
}
export const form_z_e_SendConfirm = (confirm) => {
    return {
        type: FORM_Z_E_SENDCONFIRM,
        confirm
    }
}
// api call for zone employee
export const createZoneEmployee = (firstName, lastName, email, password, userAddress) => {

    return (dispatch) => {

        let params = {
            firstName: firstName,
            lastName: lastName,

            email: email,
            password: password,
            userAddress: userAddress
        }
        dispatch(make_z_e_spinner(true));
        return axios.post(`http://${ip}:3333/api/zone/createZoneEmp`, params).
            then(response => {
                console.log("this is", response)

                if (response.data.hasOwnProperty("success")) {
                    console.log(response.data)

                    dispatch(zoneEmpReg(true))
                    dispatch(make_z_e_spinner(false));
                    dispatch(getZoneEmployeeData(response.data.user))
                }

                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    dispatch(make_z_e_spinner(false));
                    dispatch(zoneEmpReg(false));

                }
            }).
            catch(error => {

                dispatch(zoneEmpReg(false));
                dispatch(make_z_e_spinner(false));
            });
    }
}
// zone traffic ///////////////
export const zoneTrafficReg = (isRegister) => {
    console.log("dgfgfgdf")
    return {
        type: ZONE_TRAFFIC_REG_SUCCESS,
        isRegister
    }
}
export const make_z_t_spinner = (isLoading) => {
    return {
        type: MAKE_Z_T_SPINNER,
        isLoading
    }
}
export const getZoneTrafficData = (employee) => {
    return {
        type: RECEIV_Z_T,
        employee
    }
}
export const form_z_t_SendConfirm = (confirm) => {
    return {
        type: FORM_Z_T_SENDCONFIRM,
        confirm
    }
}
// api call for zone employee
export const createZoneTraffic = (firstName, lastName, email, password, userAddress) => {

    return (dispatch) => {

        let params = {
            firstName: firstName,
            lastName: lastName,

            email: email,
            password: password,
            userAddress: userAddress
        }
        dispatch(make_z_t_spinner(true));
        return axios.post(`http://${ip}:3333/api/zone/createZoneTraffic`, params).
            then(response => {
                console.log("this is", response)

                if (response.data.hasOwnProperty("success")) {
                    console.log(response.data)

                    dispatch(zoneTrafficReg(true))
                    dispatch(make_z_t_spinner(false));
                    dispatch(getZoneTrafficData(response.data.user))
                }

                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    dispatch(make_z_t_spinner(false));
                    dispatch(zoneTrafficReg(false));

                }
            }).
            catch(error => {

                dispatch(zoneTrafficReg(false));
                dispatch(make_z_t_spinner(false));
            });
    }
}
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2
// create wereda employee /////////////
export const weredaEmpReg = (isRegister) => {
    console.log("dgfgfgdf")
    return {
        type: WEREDA_EMP_REG_SUCCESS,
        isRegister
    }
}
export const make_w_e_spinner = (isLoading) => {
    return {
        type: MAKE_W_E_SPINNER,
        isLoading
    }
}
export const getWeredaEmployeeData = (employee) => {
    return {
        type: RECEIV_W_E,
        employee
    }
}
export const form_w_e_SendConfirm = (confirm) => {
    return {
        type: FORM_W_E_SENDCONFIRM,
        confirm
    }
}
// api call for wereda employee
export const createWeredaEmployee = (firstName, lastName, email, password, userAddress) => {

    return (dispatch) => {

        let params = {
            firstName: firstName,
            lastName: lastName,

            email: email,
            password: password,
            userAddress: userAddress
        }
        dispatch(make_w_e_spinner(true));
        return axios.post(`http://${ip}:3333/api/wereda/createWeredaEmp`, params).
            then(response => {
                console.log("this is", response)

                if (response.data.hasOwnProperty("success")) {
                    console.log(response.data)

                    dispatch(weredaEmpReg(true))
                    dispatch(make_w_e_spinner(false));
                    dispatch(getWeredaEmployeeData(response.data.user))
                }

                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    dispatch(make_w_e_spinner(false));
                    dispatch(weredaEmpReg(false));

                }
            }).
            catch(error => {

                dispatch(weredaEmpReg(false));
                dispatch(make_w_e_spinner(false));
            });
    }
}
// @@@@@@@@@@@@@@@@@@@@@@@@@@@2222
// create wereda traffic /////////////
export const weredaTrafficReg = (isRegister) => {
    console.log("dgfgfgdf")
    return {
        type: WEREDA_TRAFFIC_REG_SUCCESS,
        isRegister
    }
}
export const make_w_t_spinner = (isLoading) => {
    return {
        type: MAKE_W_T_SPINNER,
        isLoading
    }
}
export const getWeredaTrafficData = (employee) => {
    return {
        type: RECEIV_W_T,
        employee
    }
}
export const form_w_t_SendConfirm = (confirm) => {
    return {
        type: FORM_W_T_SENDCONFIRM,
        confirm
    }
}
// api call for wereda employee
export const createWeredaTraffic = (firstName, lastName, email, password, userAddress) => {

    return (dispatch) => {

        let params = {
            firstName: firstName,
            lastName: lastName,

            email: email,
            password: password,
            userAddress: userAddress
        }
        dispatch(make_w_t_spinner(true));
        return axios.post(`http://${ip}:3333/api/wereda/createWeredaTraffic`, params).
            then(response => {
                console.log("this is", response)

                if (response.data.hasOwnProperty("success")) {
                    console.log(response.data)

                    dispatch(weredaTrafficReg(true))
                    dispatch(make_w_t_spinner(false));
                    dispatch(getWeredaTrafficData(response.data.user))
                }

                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    dispatch(make_w_t_spinner(false));
                    dispatch(weredaTrafficReg(false));

                }
            }).
            catch(error => {

                dispatch(weredaTrafficReg(false));
                dispatch(make_w_t_spinner(false));
            });
    }
}
// @@@@@@@@@@@@@@@@@@@@@@@2
// @@ real perimistion for all sysyem 
export const getRealPermissionState = (permission) => {
    return {
        type: GET_REAL_PERMISSION,
        permission

    }
}
export const fetchRealPermission = () => {


    var newobj = {
        data: {}
    };

    return (dispatch) => {


        axios.post(`http://${ip}:3333/api/user/getRealPermission`).
            then(response => {




                dispatch(getRealPermissionState(response.data))
            }
            ).catch(error => {
                console.log(error)
            });
    }


}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@////
export const getPermissionState = (permission) => {
    return {
        type: GETPERMISSION,
        permission

    }
}
export const fetchPermission = (g) => {


    var newobj = {
        data: {}
    };

    return (dispatch) => {


        axios.post(`http://${ip}:3333/api/user/getPermission`).
            then(response => {

                console.log("permistion raw : ", response.data[0])
                response.data.map((i) => {

                    let a = 0;
                    for (var j in i) {
                        a++;

                        if (!(j in newobj.data)) {
                            newobj.data[j] = [];
                        }
                        newobj.data[j].push({
                            roleName: i[j].role.roleName, create: i[j].create,
                            delete: i[j].delete, update: i[j].update,
                            select: i[j].select
                        });



                    }
                    console.log("my new object: ", newobj)

                })

                dispatch(getPermissionState(newobj))
            }
            ).catch(error => {
                console.log(error)
            });
    }


}
// region manager
export const getRegionManager = (data) => {
    return {
        type: GET_REGION_MANGER,
        data

    }
}
export const fetchRegionManager = () => {


    return (dispatch) => {


        return axios.get(`http://${ip}:3333/api/nation/listAllRegionManager`).
            then(response => {

                console.log("region manager row :", response.data[0])

                dispatch(getRegionManager(response.data))
            }
            ).catch(error => {
                console.log(error)
            });
    }


}

// get wereda employee with wereda name 
export const makeNullWeredaEmployee = () => {
    return {
        type: MAKE_NULL_WE,

    }
}
export const getWeredaEmployee = (data) => {
    return {
        type: GET_WEREDA_EMPLOYEE,
        data

    }
}
export const fetchWeredaEmployee = (name) => {


    let params = {
        name: name
    }
    return (dispatch) => {

        return axios.get(`http://${ip}:3333/api/wereda/getWeredaEmployee`, params).
            then(response => {

                console.log("region manager row :", response.data[0])

                dispatch(getWeredaEmployee(response.data))
            }
            ).catch(error => {
                console.log(error)
            });
    }


}
// get wereada  traffic
export const makeNullWeredaTraffic = () => {

    return {
        type: MAKE_NULL_WT,

    }
}
export const getWeredaTraffic = (data) => {
    return {
        type: GET_WEREDA_TRAFFIC,
        data

    }
}
export const fetchWeredaTraffic = (name) => {


    let params = {
        name: name
    }
    return (dispatch) => {

        return axios.post(`http://${ip}:3333/api/wereda/getWeredaTraffic`, params).
            then(response => {

                console.log("wereda traffic row :", response.data[0])

                dispatch(getWeredaTraffic(response.data))
            }
            ).catch(error => {
                console.log(error)
            });
    }


}

// get all zone employee with zone name \
export const makeNullZoneEmployee = () => {
    return {
        type: MAKE_NULL_ZE,

    }
}
export const getZoneEmployee = (data) => {
    return {
        type: GET_ZONE_EMPLOYEE,
        data

    }
}

export const fetchZoneEmployee = (name) => {


    let params = {
        name: name
    }
    return (dispatch) => {

        return axios.post(`http://${ip}:3333/api/zone/getZoneEmployee`, params).
            then(response => {

                console.log("region manager row :", response.data[0])

                dispatch(getZoneEmployee(response.data))
            }
            ).catch(error => {
                console.log(error)
            });
    }


}
// get zone traffic 
export const makeNullZoneTraffic = () => {
    return {
        type: MAKE_NULL_ZT,

    }
}
export const getZoneTraffic = (data) => {
    return {
        type: GET_ZONE_TRAFFIC,
        data

    }
}

export const fetchZoneTraffic = (name) => {


    let params = {
        name: name
    }
    return (dispatch) => {

        return axios.post(`http://${ip}:3333/api/zone/getZoneTraffic`, params).
            then(response => {

                console.log("region manager row :", response.data[0])

                dispatch(getZoneTraffic(response.data))
            }
            ).catch(error => {
                console.log(error)
            });
    }


}
// get region emloyee

export const getRegionEmployee = (data) => {
    return {
        type: GET_REGION_EMPLOYEE,
        data

    }
}

export const fetchRegionEmployee = (name) => {


    let params = {
        name: name
    }
    return (dispatch) => {

        return axios.post(`http://${ip}:3333/api/region/getRegionEmployee`, params).
            then(response => {

                console.log("region manager row :", response.data[0])

                dispatch(getRegionEmployee(response.data))
            }
            ).catch(error => {
                console.log(error)
            });
    }


}

// ende
//////////////////////  fetch zone manager /////////// 
export const getZoneManager = (data) => {
    return {
        type: GET_ZONE_MANGER,
        data

    }
}
export const fetchZoneManager = () => {


    return (dispatch) => {


        return axios.get(`http://${ip}:3333/api/region/listAllZoneManager`).
            then(response => {

                console.log("region manager row :", response.data[0])

                dispatch(getZoneManager(response.data))
            }
            ).catch(error => {
                console.log(error)
            });
    }

}
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
///delete region manager accout 
export const delete_r_m = (success) => {
    return {
        type: DELETE_R_M,
        success

    }
}
///api call for delete region manager 
export const deleteRegionManager = (id) => {


    return (dispatch) => {


        return axios.get(`http://${ip}:3333/api/nation/deleteRegionManager`, {
            params: {
                id: id
            }
        }).
            then(response => {

                console.log("region manager row :", response.data[0])

                dispatch(delete_r_m(true))
                setTimeout(() => {
                    dispatch(fetchRegionManager())
                }, 1000)
            }
            ).catch(error => {
                console.log(error)
            });
    }


}
// get wereda  by zone id 

export const get_wereda = (wereda) => {
    return {
        type: GET_WEREDA,
        wereda

    }
}
//  api call for fetch region information 
export const fetchWereda = () => {


    return (dispatch) => {


        return axios.post(`http://${ip}:3333/api/wereda/getWereda`).
            then(response => {



                dispatch(get_wereda(response.data))
            }
            ).catch(error => {
                console.log(error)
            });
    }

}
// 
// get zone by region id
export const get_zone = (zone) => {
    return {
        type: GET_ZONE,
        zone

    }
}
//  api call for fetch region information 
export const fetchZone = () => {


    return (dispatch) => {


        return axios.post(`http://${ip}:3333/api/zone/getZone`).
            then(response => {

                console.log("region manager  :", response.data)

                dispatch(get_zone(response.data))
            }
            ).catch(error => {
                console.log(error)
            });
    }

}
// ende
// action for get region 
export const get_region = (region) => {
    return {
        type: GET_REGION,
        region

    }
}
//  api call for fetch region information 
export const fetchRegion = () => {


    return (dispatch) => {


        return axios.get(`http://${ip}:3333/api/nation/listAllRegion`).
            then(response => {

                console.log("region manager  :", response.data)

                dispatch(get_region(response.data))
            }
            ).catch(error => {
                console.log(error)
            });
    }

}

//////@@@@@@@@@2 create werda with manager
export const weredaReg = (isRegister) => {
    console.log("dgfgfgdf")
    return {
        type: WEREDA_REG_SUCCESS,
        isRegister
    }
}
export const make_w_spinner = (isLoading) => {
    return {
        type: MAKE_W_SPINNER,
        isLoading
    }
}
export const getWeredaData = (wereda) => {
    return {
        type: RECEIV_W,
        wereda
    }
}
export const form_w_SendConfirm = (confirm) => {
    return {
        type: FORM_W_SENDCONFIRM,
        confirm
    }
}

export const createWereda = (weredaName, firstName, lastName, email, password, userAddress) => {

    return (dispatch) => {

        let params = {
            firstName: firstName,
            lastName: lastName,

            email: email,
            password: password,
            userAddress: userAddress,
            name: weredaName
        }
        dispatch(make_w_spinner(true));
        return axios.post(`http://${ip}:3333/api/zone/createWereda`, params).
            then(response => {
                console.log("this is", response)

                if (response.data.hasOwnProperty("success")) {
                    console.log(response.data)

                    dispatch(weredaReg(true))
                    dispatch(make_w_spinner(false));
                    dispatch(getWeredaData(response.data.user))
                }

                // response data hava invalid data
                if (response.data.hasOwnProperty("error")) {
                    dispatch(make_w_spinner(false));
                    dispatch(weredaReg(false));

                }
            }).
            catch(error => {

                dispatch(weredaReg(false));
                dispatch(make_w_spinner(false));
            });
    }
}

export const getOlineUser = (users) => {
    return {
        type: GET_ONLINE_USER,
        users
    }
}
export const fetchOnlineUser = () => {
    return (dispatch) => {



        return axios.get(`http://${ip}:3333/api/chat/viewOnlineUser`, { headers: { "Access-Control-Allow-Origin": "*", } }).
            then(response => {
                console.log("online users action ", response.data)
                dispatch(getOlineUser(response.data))

            }).
            catch(error => {


            });
    }
}
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@22






















export const setValidate = (isDuplicate) => {
    return {
        type: EMAILVALIDATE,
        isDuplicate

    }


}





export const emailValidate = (email) => {

    return (dispatch) => {

        let params = {


            email: email,

        }
        return axios.post(`http:///${ip}:3333/api/user/getDuplicateEmail`, params).
            then(response => {
                console.log("this is")

                if (response.data.exist)
                    dispatch(setValidate(true))



                // response data hava invalid data
                if (!response.data.exist) {
                    dispatch(setValidate(false));

                }
            }).
            catch(error => {

                dispatch(nationEmpReg(false));
            });
    }
}