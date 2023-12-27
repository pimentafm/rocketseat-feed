import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css'


export function App() {
  return (
    <div>
      <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
          <Post 
          author="Fernando Pimenta" 
          content="Ignite, o melhor curso de todos os tempos!"
        />
      </main>
    </div>


    </div>

  )
}
