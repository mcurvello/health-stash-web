import BaseInput from '@/components/base-input';

interface InputGenderProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGender = (props: InputGenderProps) => 
  <BaseInput placeholder='Gênero' onChange={props.onChange} />


export default InputGender;