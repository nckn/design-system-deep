/* eslint-disable */

interface LabelProps {
  primary?: boolean;
  theme?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  text: string;
  onClick?: () => void;
}

export const Label = ({
  primary = false,
  size = 'medium',
  theme,
  label,
  text,
  ...props
}: LabelProps) => {
  
  // const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';
  const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';

  return (
    <div
      className={['label-toggle ', `label-toggle--${size}`].join('')}
    >
      {text}
    </div>
  )
}
