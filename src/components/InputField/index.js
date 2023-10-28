import React from "react";
import { Input, InputGroup } from "@chakra-ui/react";

function InputField({
  placeholder,
  value,
  onChange,
  secureTextEntry,
  children,
}) {
  return (
    <InputGroup>
      <Input
        type={secureTextEntry ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        borderColor="#fff"
        borderWidth={2}
        borderRadius={20}
        color="#fff"
        bg="transparent"
        _focus={{ borderColor: "#0083C5" }}
        _placeholder={{ color: "#fff" }}
        _hover={{ borderColor: "#0083C5" }}
        marginY={1}
      />

      {children}
    </InputGroup>
  );
}

export default InputField;
