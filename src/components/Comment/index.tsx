import { FC } from 'react';
import styles from './index.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { Author } from '../types';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface CommentProps {
    id: number;
    author: Author;
    content: string;
    publishedAt: Date;
}

export const Comment: FC<CommentProps> = ({ id, author, content, publishedAt }) => {
    const publishedAtFormattedDate = format(publishedAt, 'd LLLL HH:mm', { locale: ptBR });
    const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

    return (
        <div key={id} className={styles.comment}>
            <Avatar hasBorder={false} src={author.avatarUrl} alt="Imagem do perfil do usuário" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author.name}</strong>

                            <time title={publishedAtFormattedDate} dateTime={publishedAt.toISOString()}>
                                {publishedAtRelativeToNow}
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
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
