import { Button, Text } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComments } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: (event: Event) => void;
}

const BaseButton = (props: ButtonProps) => {
  return (
    <Button onClick={props.onClick}>
      { props.icon === 'home' && <FontAwesomeIcon icon={faHome} /> }
      { props.icon === 'comments' && <FontAwesomeIcon icon={faComments} /> }
      <Text>
        {props.text}
      </Text>
    </Button>
  );
};

export default BaseButton;