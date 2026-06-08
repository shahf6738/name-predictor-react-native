import { FIRST_TABLE } from "../constants/letters";

export function predictName(selectedColumns: number[], selectedRows: number[]) {
  let result = "";

  for (let i = 0; i < selectedColumns.length; i++) {
    result += FIRST_TABLE[selectedRows[i]][selectedColumns[i]];
  }

  return result;
}
