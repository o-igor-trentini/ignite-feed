import { FC, useState } from 'react';
import styles from './index.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { Author } from '../types';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface CommentProps {
    author: Author;
    content: string;
    publishedAt: Date;
    onDelete?: () => void;
}

export const Comment: FC<CommentProps> = ({ author, content, publishedAt, onDelete }) => {
    const [likeCount, setLikeCount] = useState<number>(0);
    const publishedAtFormattedDate = format(publishedAt, 'd LLLL HH:mm', { locale: ptBR });
    const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

    const handleDelete = (): void => {
        if (onDelete) onDelete();
    };

    const handleLike = (): void => setLikeCount((current) => current + 1);

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={author?.avatarUrl} alt="Imagem do perfil do usuário" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author?.name}</strong>

                            <time title={publishedAtFormattedDate} dateTime={publishedAt.toISOString()}>
                                {publishedAtRelativeToNow}
                            </time>
                        </div>

                        <button title="Deletar comentário" onClick={handleDelete}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLike}>
                        <ThumbsUp size={20} /> Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
};
