import { Input, LabelTags } from './styles'

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
      {props.labelTags && <LabelTags>+ {props.labelTags}</LabelTags>}
    </div>
  );
};

export default BaseInputText;