import BaseInput from '@/components/base-input';
import { ContainerInput } from './styles';

interface BaseSelectProps {
  placeholder: string;
  width?: string;
}

const BaseSelect = (props: BaseSelectProps) => {
  return (
    <>
      <ContainerInput>
        <BaseInput
          placeholder={props.placeholder}
          width={props.width || '406px'} 
        />
      </ContainerInput>
    </>
  );
}

export default BaseSelect;