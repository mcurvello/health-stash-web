import { Button } from './styles';

interface ButtonProps {
  text: string;
}

const BaseButton = (props: ButtonProps) => {
  return (
    <Button>
      {props.text}
    </Button>
  );
};

export default BaseButton;