import { Input } from './styles'

interface BaseInputTextProps {
  placeholder: string;
  width?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseInputText = (props: BaseInputTextProps) => {
  return (
    <Input
      placeholder={props.placeholder}
      width={props.width}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default BaseInputText;