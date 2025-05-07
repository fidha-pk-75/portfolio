import React from 'react'

function SkillList({src,skills}) {
  return (
    <span>
    <img src={src} alt='checkMark'/>
    <p>{skills}</p>
  </span>
  )
}

export default SkillList
