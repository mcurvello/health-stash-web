import { Input } from './styles'

interface BaseInputTextProps {
  placeholder: string;
  width?: string;
  type?: string;
}

const BaseInputText = (props: BaseInputTextProps) => {
  return (
    <div>
      <Input
        placeholder={props.placeholder}
        width={props.width}
        type={props.type}
      />
    </div>
  );
};

export default BaseInputText;