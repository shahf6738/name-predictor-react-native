import { useState } from "react";

export function useGame() {
  const [nameLength, setNameLength] = useState("");
  const [selectedColumns, setSelectedColumns] = useState<number[]>([]);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [predictedName, setPredictedName] = useState("");

  return {
    nameLength,
    setNameLength,
    selectedColumns,
    setSelectedColumns,
    selectedRows,
    setSelectedRows,
    predictedName,
    setPredictedName,
  };
}
