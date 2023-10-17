import { InputTelMask } from './styles'

interface InputTelProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTel = ({ onChange }: InputTelProps) => {

  return <InputTelMask mask="(__) _____-____" replacement={{ _: /\d/ }} placeholder="Telefone" onChange={onChange} />;
}

export default InputTel;