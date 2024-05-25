import {Post} from "./components/Post"
import { Header } from "./components/Header"
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      name: "Alex Lopes",
      avatarUrl: "https://www.github.com/alexlsilva7.png",
      role: "Web Developer"
    },
    content: [
      {
        'type': 'paragraph',
        'content': 'Fala galeraa 👋'
      },
      {
        'type': 'paragraph',
        'content': 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        'type': 'link',
        'content': 'jane.design/doctorcare'
      },
      {
        'type': 'hashtags',
        'content': ['#novoprojeto', '#nlw', '#rocketseat']
      }
    ],
    publishedAt: new Date("2022-05-11 08:13:30"),
  },
  {
    id: 2,
    author: {
      name: "Jane Doe",
      avatarUrl: "https://www.github.com/janedoe.png",
      role: "Designer"
    },
    content: [
      {
        'type': 'paragraph',
        'content': 'Olá, pessoal! 🎨'
      },
      {
        'type': 'paragraph',
        'content': 'Estou em busca de um(a) desenvolvedor(a) para me ajudar a criar um site para um cliente. Alguém interessado?'
      },
      {
        'type': 'hashtags',
        'content': ['#vaga', '#freelancer', '#webdesign']
      }
    ],
    publishedAt: new Date("2022-05-10 15:30:00"),
  },
]


export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post 
              key={post.id} 
              author={post.author} 
              content={post.content} 
              publishedAt={post.publishedAt} 
            />
          )
          )}
        </main>
      </div>
    </div>
  )
}

