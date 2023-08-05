import BaseInput from '@/components/base-input';

const InputAllergies = () => {
  return (
    <BaseInput
      placeholder='Alergias'
      full={true}
      addTag={true}
      labelTags='Adicionar alergias'
    />
  )
}

export default InputAllergies;