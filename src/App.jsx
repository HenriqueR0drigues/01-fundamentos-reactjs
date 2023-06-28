import { Post } from './components/Post';
import { Header } from './components/Header';

import './global.css';

import styles from './App.module.css';
import Sidebar from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/HenriqueR0drigues.png",
      name: 'Henrique Rodrigues',
      role: 'CTO @ TecStreet'
    }
  }
];

export function App() {

  return (
  <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
          author="Henrique Rodrigues"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit tenetur aliquid nemo, natus, ipsa maiores minima nisi harum dolore quos tempora magnam odit impedit? Quo, consequuntur consectetur? Similique, sequi animi." 
          />

          <Post 
          author="Gabriel Buzzi"
          content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}

