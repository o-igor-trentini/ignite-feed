import { Header } from './Header';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './Sidebar';
import { Post, PostProps } from './Post';

const posts: PostProps[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/o-igor-trentini.png',
            name: 'Igor Trentini',
            role: 'Web Developer',
        },
        content: [
            { type: 'paragraph', value: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                value: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', value: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-11-09 12:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @Rocketset',
        },
        content: [
            { type: 'paragraph', value: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                value: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', value: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-11-10 12:00:00'),
    },
];

const App = () => {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    {posts.map((item) => (
                        <Post
                            key={item.id}
                            id={item.id}
                            author={item.author}
                            content={item.content}
                            publishedAt={item.publishedAt}
                        />
                    ))}
                </main>
            </div>
        </>
    );
};

export default App;
