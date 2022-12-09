/* eslint-disable */

interface SearchFieldDeepProps {
  primary?: boolean;
  theme?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const SearchFieldDeep = ({
  primary = false,
  size = 'medium',
  theme,
  label,
  ...props
}: SearchFieldDeepProps) => {

  // const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';

  return (
    <div className="search-wrapper search-panel isshowing">
      <div className="icon icon--search"></div>
      <input type="text" className="search-input" label="Search sounds" />
    </div>
  )
}
