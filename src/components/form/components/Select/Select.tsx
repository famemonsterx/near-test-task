import { useState } from "react";

type Option = {
  label: string
  value: number | string
}

type ComponentProps = {
  options: Option[] | undefined
  onChange?: (value?: string | number) => void
}

export const Select = ({
  options, onChange
}: ComponentProps) => {
  const [state, setState] = useState<string | number>('default')
  const handleChange = (value: string | number) => {
    setState(value)
    onChange?.(value)
  }
  return (
    <select defaultValue={'default'} value={state} onChange={e => handleChange(e.target.value)}>
      <option value={"default"} disabled hidden>
        Choose an option
      </option>
      {options?.map(item => (
        <option key={item.value} value={item.value}>{item.label}</option>
      ))}
    </select>
  )
}