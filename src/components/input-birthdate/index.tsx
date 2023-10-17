import { InputBithdateMask } from './styles'

interface InputBirthdateProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBirthdate = ({ onChange }: InputBirthdateProps) => 
  <InputBithdateMask
    mask="__/__/____"
    replacement={{ _: /\d/ }}
    placeholder="Data de nascimento"
    onChange={onChange}
  />;

export default InputBirthdate;
