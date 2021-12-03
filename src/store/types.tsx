import { IRequest } from "../components/GetOffer/types";

export interface IStore {
  data: IRequest,
  error: string,
  pending: boolean,
}
