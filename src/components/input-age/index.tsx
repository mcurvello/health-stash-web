import BaseInput from "@/components/base-input";

interface InputAgeProps {
  width?: string;
}

const InputAge = (props: InputAgeProps) => {
  return (
    <div>
      <BaseInput
        width={props.width || "256px"}
        placeholder="Idade"
      />
    </div>
  );
};

export default InputAge;
