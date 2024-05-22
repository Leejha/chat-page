import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  LiHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  createContext,
} from "react";

import { useSelectContext } from "./use-select-context";

export const SelectContext = createContext<{
  value: string;
  onChangeValue: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}>({
  value: "",
  onChangeValue: () => {},
  isOpen: false,
  onToggle: () => {},
});

interface SelectProps {
  value: string;
  onChangeValue: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export function SelectMain({
  value,
  onChangeValue,
  children,
  isOpen,
  onToggle,
}: SelectProps) {
  return (
    <SelectContext.Provider value={{ value, onChangeValue, isOpen, onToggle }}>
      {children}
    </SelectContext.Provider>
  );
}

export function SelectOptionList({
  children,
  ...rest
}: PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
>) {
  const { isOpen } = useSelectContext();

  return (
    <>
      {isOpen && (
        <ul role="listbox" {...rest}>
          {children}
        </ul>
      )}
    </>
  );
}

export function SelectOption(
  props: LiHTMLAttributes<HTMLLIElement> & {
    value: string;
    children: ReactNode;
  }
) {
  const context = useSelectContext();
  return (
    <li
      role="option"
      onClick={() => context.onChangeValue(props.value)}
      {...props}
    >
      {props.children}
    </li>
  );
}

export function SelectTrigger({
  children,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  const { onToggle } = useSelectContext();

  return (
    <button onClick={onToggle} {...rest}>
      {children}
    </button>
  );
}
