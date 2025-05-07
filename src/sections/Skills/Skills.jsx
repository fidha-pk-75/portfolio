import React from 'react'
import styles from './SkillsStyles.module.css'
import checkmarkdark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {

  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
       <SkillList src={checkmarkdark} skills='HTML' />
       <SkillList src={checkmarkdark} skills='CSS' />
       <SkillList src={checkmarkdark} skills='JavaScript' />
       <hr/>
       <SkillList src={checkmarkdark} skills='GIT' />
       <SkillList src={checkmarkdark} skills='React JS' />
      </div>
    </section>
  )
}

export default Skills
