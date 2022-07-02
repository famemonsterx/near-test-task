import { ActionTypes } from "../constants";

export interface PayloadAction<T> {
  type: ActionTypes
  payload?: T
}