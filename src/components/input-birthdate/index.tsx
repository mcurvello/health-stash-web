import BaseInput from "@/components/base-input";

interface InputBirthdateProps {
  width?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBirthdate = (props: InputBirthdateProps) => {
  return (
    <BaseInput
      width={props.width || "256px"}
      placeholder="Data de nascimento"
      onChange={props.onChange}
    />
  );
};

export default InputBirthdate;
