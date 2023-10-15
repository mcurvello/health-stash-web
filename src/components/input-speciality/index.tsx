import BaseInput from "@/components/base-input";

interface InputSpecialityProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSpeciality = (props: InputSpecialityProps) =>
  <BaseInput placeholder="Especialidade" onChange={props.onChange} />

export default InputSpeciality;