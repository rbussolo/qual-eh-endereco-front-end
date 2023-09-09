import { InputHTMLAttributes } from "react";
import { CheckBoxContainer } from "./styles";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement>{
  labelNotChecked: string;
  labelChecked: string;
  checked: boolean;
}

export function CheckBox({ labelNotChecked, labelChecked, checked, ...rest }: CheckBoxProps) {
  const label = checked ? labelChecked : labelNotChecked;
  const classChecked = checked ? "is-checked" : "is-not-checked";
  
  return (
    <CheckBoxContainer className={classChecked}>
      { label }
      <input 
        type="checkbox" 
        checked={checked} 
        { ...rest }
      />
    </CheckBoxContainer>
  )
}