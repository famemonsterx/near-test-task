import { HTMLInputTypeAttribute } from "react";
import { Field } from "formik";

type ComponentProps = {
  name: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
}

export const Input = ({
  name, type
}: ComponentProps) => {
  return (
    <Field type={type} name={name} />
  )
}