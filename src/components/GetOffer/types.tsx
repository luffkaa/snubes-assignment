import { Dispatch, SetStateAction } from "react";

export type IDispatchState<T> = Dispatch<SetStateAction<T>>;

export interface IRequest {
  company: string,
  name: string,
  phone: string,
  email: string,
}
