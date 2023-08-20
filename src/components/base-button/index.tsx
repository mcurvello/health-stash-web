import { Button, Text } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComments } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  text: string;
  icon?: string;
}

const BaseButton = (props: ButtonProps) => {
  return (
    <Button>
      { props.icon === 'home' && <FontAwesomeIcon icon={faHome} /> }
      { props.icon === 'comments' && <FontAwesomeIcon icon={faComments} /> }
      <Text>
        {props.text}
      </Text>
    </Button>
  );
};

export default BaseButton;