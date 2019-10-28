import React, { Fragment } from 'react'
import SkillBar from './skill-bar'
import styled from 'styled-components'

const Group= styled.div`
margin: 20px;
padding:10px;
`

export default ({ title = 'Skills', skills = [] }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      {skills.map(group => (
        <Group>
          <h2>{group.subject}</h2>
            {group.skills.map(skill => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
        </Group>
      ))}
    </Fragment>
  )
}
