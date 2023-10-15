import BaseInput from '@/components/base-input';

interface InputGenderProps {
  width?: string;
}

const InputGender = (props: InputGenderProps) => {

  // const genders = ['Masculino', 'Feminino', 'Outro'];

  return (
    <BaseInput
      placeholder='Gênero'
      width={props.width}
    />
  )
}

export default InputGender;