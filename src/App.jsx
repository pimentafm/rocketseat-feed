import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      name: "Fernando Pimenta",
      avatarUrl: "https://github.com/pimentafm.png",
      role: "Software Engineer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date("2023-05-11 04:06:30"),
  },
  {
    id: 2,
    author: {
      name: "Lorena Pereira",
      avatarUrl: "https://github.com/pimentafm.png",
      role: "Agronomist Engineer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date("2023-08-11 02:06:30"),
  }
]

export function App() {
  return (
    <div>
      <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        { posts && posts.map(post => 
          <Post 
            key={post.id} 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )}
      </main>
    </div>


    </div>

  )
}
