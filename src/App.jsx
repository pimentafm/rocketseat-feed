import { Post } from './Post';
import { Header } from './components/Header';

import './global.css'

export function App() {
  return (
    <div>
      <Header />

    <Post 
      author="Fernando Pimenta" 
      content="Ignite, o melhor curso de todos os tempos!"
    />

    </div>

  )
}
