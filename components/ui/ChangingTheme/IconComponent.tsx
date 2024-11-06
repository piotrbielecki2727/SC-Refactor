import { LucideIcon } from 'lucide-react';
import { FC } from 'react';
import styled from 'styled-components';

type IconProps = {
  icon: LucideIcon;
};

const IconWrapper = styled.div`
  height: 1.2rem;
  width: 1.2rem;
`;

const IconComponent: FC<IconProps> = ({ icon: Icon }) => <IconWrapper as={Icon} />;

export default IconComponent;
