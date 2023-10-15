import BaseInput from "@/components/base-input";

interface InputEmailProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputEmail = (props: InputEmailProps) =>
  <BaseInput placeholder="E-mail" onChange={props.onChange} />;

export default InputEmail;