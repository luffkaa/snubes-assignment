import { AnyAction } from "redux";
import { 
  GET_REQUEST_FAILURE,
  GET_REQUEST_START,
  GET_REQUEST_SUCCESS
} from "./types";

const initialState = {
  data: {},
  error: null,
  pending: false,
}

export function requestReducer(
  state = initialState,
  action: AnyAction,
) {
  switch(action.type) {
    case GET_REQUEST_START:
      return {
        ...state,
        pending: true,
      };
    case GET_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        pending: false,
      };
    case GET_REQUEST_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
