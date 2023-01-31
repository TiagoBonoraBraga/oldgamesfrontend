import React from "react";
import { FormEvent } from "react";
import { FormContainer } from "./style";

export interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  defaultValue?: string | number | string[];
}

export interface FormProps<T = FormEvent<HTMLFormElement>> {
  title: string;
  inputs: InputProps[];
  onSubmit: (value: T) => void;
}

export function Form({ inputs, onSubmit, title }: FormProps) {
  return (
    <FormContainer>
      <h2>{title}</h2>

      <form onSubmit={onSubmit}>
        {inputs.map((input) => (
          <input
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            defaultValue={input.defaultValue}
          />
        ))}
        <button type="submit">{title}</button>
      </form>
    </FormContainer>
  );
}
