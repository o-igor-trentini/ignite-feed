import { FC } from 'react';

import styles from './index.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';

export const Comment: FC = () => {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/o-igor-trentini.png" alt="Imagem do perfil do usuário" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igor Luís Casanova Trentini</strong>

                            <time title="3 de Julho às 12:00h" dateTime="2022-07-03 12:00:00">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} /> Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
};
