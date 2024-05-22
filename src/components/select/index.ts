import {
  SelectMain,
  SelectOption,
  SelectOptionList,
  SelectTrigger,
} from "./select-main";

export const Select = Object.assign(SelectMain, {
  Trigger: SelectTrigger,
  OptionList: SelectOptionList,
  Option: SelectOption,
});
