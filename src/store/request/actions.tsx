import { IRequest } from "../../components/GetOffer/types";
import {
  GET_REQUEST_FAILURE,
  GET_REQUEST_START,
  GET_REQUEST_SUCCESS
} from "./types";

export const getRequestStart = () => ({
  type: GET_REQUEST_START
})

export const getRequestSuccess = (data: IRequest) => ({
  type: GET_REQUEST_SUCCESS,
  payload: data,
})

export const getRequestFailure = (
  err: unknown
) => ({
  type: GET_REQUEST_FAILURE,
  payload: err,
})
