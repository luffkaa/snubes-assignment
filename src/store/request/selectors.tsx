import { IStore } from "../types";

export const selectRequestData = (state: IStore) =>
  state.data;
