import { logState } from "./state";
import { SIGNIN } from "./types";

export const logReducer = (state = logState, option) => {
    switch (option.type) {
     case SIGNIN:
         state.reg = option.payload
         break
    }
    return { ...state }
}