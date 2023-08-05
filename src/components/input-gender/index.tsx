import BaseSelect from '@/components/base-select';

interface InputGenderProps {
  width?: string;
}

const InputGender = (props: InputGenderProps) => {

  // const genders = ['Masculino', 'Feminino', 'Outro'];

  return (
    <BaseSelect
      placeholder='Gênero'
      width={props.width}
    />
  )
}

export default InputGender;