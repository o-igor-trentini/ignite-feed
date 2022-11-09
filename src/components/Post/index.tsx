import { FC } from 'react';
import styles from './index.module.css';
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

type ContentType = 'paragraph' | 'link';

export interface PostProps {
    id: number;
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    };
    content: { type: ContentType; value: string }[];
    publishedAt: Date;
}

export const Post: FC<PostProps> = ({ author, content, publishedAt }) => {
    const publishedAtFormattedDate = format(publishedAt, 'd "de" LLLL "as" HH:mm"h"', { locale: ptBr });
    const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBr, addSuffix: true });

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="Imagem do perfil do usuário" />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtFormattedDate} dateTime={publishedAt.toISOString()}>
                    {publishedAtRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((item, index) =>
                    item.type === 'paragraph' ? (
                        <p key={index}>{item.value}</p>
                    ) : (
                        <a key={index} href="#">
                            {item.value}
                        </a>
                    ),
                )}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea placeholder="Deixe um comentário" />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
};
