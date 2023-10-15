import BaseInput from '@/components/base-input';

interface InputCommorbiditiesProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputCommorbidities = (props: InputCommorbiditiesProps) => 
  <BaseInput placeholder='Comorbidades' onChange={props.onChange} />;

export default InputCommorbidities;