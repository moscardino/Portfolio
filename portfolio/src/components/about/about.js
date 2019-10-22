import React, { Fragment } from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

const Styledimg = styled.img`
  width: 8rem;
  height: 100%;
  background-color: white;
  transition: transform 0.2s;
  :hover {
    transform: scale(3);
    background-color: rgb(236, 234, 234);
  }
  :hover:after {
    content: 'pipsdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhpo';
  }
`
const Styledstrong= styled.strong`
font-size: 2rem;
width: 24rem`

const Styleddiv= styled.div`
font-size: 1.5rem;
width: 24rem`

const About = ({ title = 'Who Am I?', whoIam }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {whoIam.map(character => (
          <div>
            <ReactTooltip id={character.whatIam} type="light" multiline>
              <Styledstrong>{character.whatIam}</Styledstrong>
              <Styleddiv>{character.details}</Styleddiv>
            </ReactTooltip>
            <Styledimg
              src={character.image}
              alt={character.details}
              data-tip=""
              data-for={character.whatIam}
              className="image__about"
            />
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default About
