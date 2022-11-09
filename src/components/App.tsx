import { Header } from './Header';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './Sidebar';
import { Post } from './Post';

const App = () => {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    <Post />
                    <Post />
                </main>
            </div>
        </>
    );
};

export default App;
