import { useContext } from "react";
import { SelectContext } from "./select-main";

export const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error(
      "useSelectContext는 SelectProvider 내부에서만 사용할 수 있습니다."
    );
  }

  return context;
};
