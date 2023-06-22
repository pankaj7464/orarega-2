import userRequest from "../ActionType"


export const LogoutAction =(response)=>{
    return {
        type: userRequest.USER,
        payload: response
      }
    
}