import { Alertstate, AlertAction, SET_ALERT } from './../types';

const initialState: Alertstate = {
    message: ''
}


export default (state = initialState, action: AlertAction): Alertstate => {
    switch (action.type) {
        case SET_ALERT:
            return {
                message: action.payload
            }
        default:
            return state;
    }
}