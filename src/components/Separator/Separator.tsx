// Separator
interface SeparatorProps {
  primary?: boolean;
  color?: string;
  onClick?: () => void;
}

export const Separator = ({
  primary = false,
  type = '',
  color,
  ...props
}: SeparatorProps) => {
  // const type = type;
  return ( 
    <div
      className={['separator ', `${type}`].join('')}
    >
    </div>
  )
}
