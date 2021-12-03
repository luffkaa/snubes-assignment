import { Dispatch } from "redux";
import { IRequest } from "../components/GetOffer/types";
import {
  getRequestFailure,
  getRequestStart,
  getRequestSuccess
} from "./request/actions";

export const sendRequest = (data: IRequest) => 
  async (dispatch: Dispatch) => {
    dispatch(getRequestStart())
    try {
      dispatch(getRequestSuccess(data))
    } catch (err: unknown) {
      dispatch(getRequestFailure(err))
    }
}
