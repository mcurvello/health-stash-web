import { ChangeEvent } from 'react';
import './styles.css';

interface BaseRadioProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const BaseRadio = (props: BaseRadioProps) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  }

  return (
    <label className="container">
      {props.label}
      <input
        type="radio"
        name="radio"
        checked={props.checked}
        value={props.value}
        onChange={handleChange}
      />
      <span className="checkmark"></span>
    </label>
  )
};

export default BaseRadio;