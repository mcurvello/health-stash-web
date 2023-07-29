import './styles.css';

interface BaseInputUserProps {
  placeholder?: string;
}

const BaseInputUser = (props: BaseInputUserProps) => {
  return (
    <div>
      <input type="text" className="input" placeholder={props.placeholder} />
    </div>
  );
};

export default BaseInputUser;