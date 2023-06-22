import ActionType from "../ActionType"

const AdminState = {
    user:false
}
const userReducer = (state = AdminState, {type, payload}) => {
    switch(type){
        case ActionType.USER:
            return{...state, user:payload};
        default:
            return state;
    }
}
export default userReducer