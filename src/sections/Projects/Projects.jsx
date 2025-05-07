import React from 'react'
import styles from '../Projects/projectsStyles.module.css'
import shopco from '../../assets/shopco.png'
import euphoria from '../../assets/euphoria.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
        src={shopco} 
        link='https://github.com/fidha-pk-75/shopco'
        h3='Shop.co'
        p=' e-commerce website'
        />
        <ProjectCard 
        src={euphoria} 
        link='https://github.com/fidha-pk-75/euphoria'
        h3='Euphoria'
        p=' e-commerce website'
        />

        
      </div>
    </section>
  )
}

export default Projects
