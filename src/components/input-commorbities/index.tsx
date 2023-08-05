import BaseInput from '@/components/base-input';

const InputCommorbidities = () => {
  return (
    <BaseInput
      placeholder='Comorbidades'
      full={true}
      addTag={true}
      labelTags='Comorbidades'
    />
  )
}

export default InputCommorbidities;