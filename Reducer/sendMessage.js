
import { SEND_MESSAGE ,SEND_MESSAGE_ERROR} from "../Action/type";


const intialState = {
    send: false,
    error:null

}

const sendMessage = (state = intialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            return {
                send: action.send
            }

            case SEND_MESSAGE_ERROR:
                return {
                    error: action.error,
                    send:false
                }
        default: return state;
    }
}

export default sendMessage;