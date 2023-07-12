import { useHistory } from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {

  const history = useHistory()

  function createPost(project) {

    // inicializando o projeto cost em 0 e services vazio
    project.cost = 0
    project.services = []

    fetch('http:/localhost:500/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'aplication/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        //redirect
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}
export default NewProject