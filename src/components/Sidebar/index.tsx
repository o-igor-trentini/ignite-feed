import { FC } from 'react';

import styles from './index.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

export const Sidebar: FC = () => {
    return (
        <aside className={styles.sidebar}>
            <img
                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                alt="Capa de perfil do usuário"
                className={styles.cover}
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/o-igor-trentini.png" alt="Imagem do perfil do usuário" />

                <strong>Igor Luís Casanova Trentini</strong>

                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
};
