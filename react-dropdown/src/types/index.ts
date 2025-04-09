import { Dispatch, SetStateAction } from "react";

export interface IDropdownProps<T> {
  value: T;
  options: Array<T>;
  setDropdownValue: Dispatch<SetStateAction<T>>;
}
