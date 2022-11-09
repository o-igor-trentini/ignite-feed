import { FC } from 'react';

import styles from './index.module.css';

interface AvatarProps {
    src: string;
    alt?: string;
    hasBorder?: boolean;
}

export const Avatar: FC<AvatarProps> = ({ src, alt, hasBorder = true }) => {
    return <img src={src} alt={alt} className={hasBorder ? styles.avatarWithBorder : styles.avatar} />;
};
