/* eslint-disable */

interface InputRangeProps {
  primary?: boolean;
  theme?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const InputRange = ({
  primary = false,
  size = 'medium',
  theme,
  label,
  ...props
}: InputRangeProps) => {
  
  const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';

  const onChange = (e) => {
    document.querySelector('.range-slider__label__value').innerHTML = e.target.value
  }

  return (
    <div className="range-slider">
      <div className="range-slider__label-group">
        <label className="range-slider__label range-slider__label__name">{label}</label> 
        <label className="range-slider__label range-slider__label__value">50</label> 
      </div> 
      <input
        name="demo-slider"
        className="range-slider__input"
        type="range" min="0" max="100" step="1"
        onChange={onChange}
      />
    </div>
  )
}
