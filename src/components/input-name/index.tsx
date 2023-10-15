import BaseInput from "@/components/base-input";

interface InputNameProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputName = (props: InputNameProps) => {
  return (
    <BaseInput
      placeholder="Nome completo"
      width="702px"
      type="text"
      onChange={props.onChange}
    />
  );
} 
export default InputName;