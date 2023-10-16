import BaseInput from '@/components/base-input';

interface InputTelProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTel = (props: InputTelProps) => <BaseInput placeholder="Telefone" onChange={props.onChange} />

export default InputTel;