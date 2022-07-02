import { FC } from 'react';
import styles from './index.module.css';

import logo from '../../assets/logo.svg';

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo tipo do Post Feed" />
        </header>
    );
};
