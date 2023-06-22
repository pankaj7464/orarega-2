import ActionType from "../ActionType"
const toggleState = {
    auth:"",
    profile:"",
    form_popup:"",
    feedback:"",
}
const toggleReducer = (state = toggleState, {type, payload}) => {
    switch(type){
        case ActionType.AUTH:
            return{...state, auth:payload};
        case ActionType.profile:
            return{...state, profile:payload};
        case ActionType.form_popup:
            return{...state, form_popup:payload};
        case ActionType.feedback:
            return{...state, feedback:payload};
        default:
            return state;
    }
}
export default toggleReducer