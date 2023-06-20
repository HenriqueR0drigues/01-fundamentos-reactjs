import { Post } from './Post';
import { Header } from './components/Header';

import './global.css'

export function App() {

  return (

  <div>
      <Header/>
      <Post 
      author="Henrique Rodrigues"
      content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit tenetur aliquid nemo, natus, ipsa maiores minima nisi harum dolore quos tempora magnam odit impedit? Quo, consequuntur consectetur? Similique, sequi animi." 
      />

      <Post 
      author="Gabriel Buzzi"
      content="Um novo post muito legal" 
      />
    </div>
  )
}

