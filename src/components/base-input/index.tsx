import { Input } from './styles'

interface BaseInputTextProps {
  placeholder: string;
  width?: string;
  type?: string;
  full?: boolean;
  addTag?: boolean;
  labelTags?: string;
}

const BaseInputText = (props: BaseInputTextProps) => {
  const isFull = props.full ? '100%' : 'auto';
  
  return (
    <div style={{ width: isFull }}>
      <Input
        placeholder={props.placeholder}
        width={props.width}
        type={props.type}
      />
    </div>
  );
};

export default BaseInputText;