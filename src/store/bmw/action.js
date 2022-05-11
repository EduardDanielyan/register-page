import { SIGNIN } from "./types";

export function setRegister(data){
    return{
        type: SIGNIN,
        payload: data
    }
}