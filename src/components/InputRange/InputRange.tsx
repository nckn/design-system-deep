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

  return (
    <div className="range-slider">
      <div className="range-slider__label-group">
        <label className="range-slider__label range-slider__label__name">Name</label> 
        <label className="range-slider__label range-slider__label__value">Value</label> 
      </div> 
      <input
        name="demo-slider"
        className="range-slider__input"
        type="range" min="0" max="100" step="1"
      />
    </div>
  )
}
