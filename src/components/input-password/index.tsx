import BaseInput from "@/components/base-input";

interface InputPasswordProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPassword = (props: InputPasswordProps) =>
  <BaseInput placeholder="Digite sua senha" type="password" onChange={props.onChange} />;

export default InputPassword;