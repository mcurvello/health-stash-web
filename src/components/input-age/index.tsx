import BaseInput from "@/components/base-input";

interface InputAgeProps {
  width?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputAge = (props: InputAgeProps) => {
  return (
    <BaseInput
      width={props.width || "256px"}
      placeholder="Data de nascimento"
      onChange={props.onChange}
    />
  );
};

export default InputAge;
