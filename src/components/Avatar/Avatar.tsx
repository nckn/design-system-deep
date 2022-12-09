/* eslint-disable */

interface AvatarProps {
  primary?: boolean;
  theme?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  text: string;
  onClick?: () => void;
}

export const Avatar = ({
  primary = false,
  size = 'medium',
  theme,
  label,
  text = 'NK',
  ...props
}: AvatarProps) => {
  // const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';
  return (
    <div
      className={['avatar ', `avatar--${size}`].join('')}
    >
      {text}
    </div>
  )
}
