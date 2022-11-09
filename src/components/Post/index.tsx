import { FC, FormEvent, FormEventHandler, useState } from 'react';
import styles from './index.module.css';
import { Comment, CommentProps } from '../Comment';
import { Avatar } from '../Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Author, ContentType } from '../types';

const cmts: CommentProps[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/o-igor-trentini.png',
            name: 'Igor Trentini',
            role: 'Web Developer',
        },
        content: ['Wooow 👋', 'Que legal! Dizem que foguete não tem ré! 🚀'],
        publishedAt: new Date('2022-11-09 12:00:00'),
    },
];

export interface PostProps {
    id: number;
    author: Author;
    content: { type: ContentType; value: string }[];
    publishedAt: Date;
}

export const Post: FC<PostProps> = ({ id, author, content, publishedAt }) => {
    const [comments, setComments] = useState<CommentProps[]>(cmts);

    const publishedAtFormattedDate = format(publishedAt, 'd LLLL HH:mm', { locale: ptBR });
    const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const text: string = event.currentTarget?.comment?.value ?? '';

        if (!text) return;

        setComments((current) => {
            const last = current[current.length - 1];

            return [...current, { ...last, id: last.id + 1, content: text, publishedAt: new Date() }];
        });

        event.currentTarget.reset();
    };

    return (
        <article key={id} className={styles.post}>
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
                {content.map((item) =>
                    item.type === 'paragraph' ? (
                        <p key={item.value}>{item.value}</p>
                    ) : (
                        <a key={item.value} href="#">
                            {item.value}
                        </a>
                    ),
                )}
            </div>

            <form onSubmit={onSubmit} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea name="comment" placeholder="Deixe um comentário" />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((item) => (
                    <Comment
                        key={item.id}
                        id={item.id}
                        author={item.author}
                        content={item.content}
                        publishedAt={item.publishedAt}
                    />
                ))}
            </div>
        </article>
    );
};
