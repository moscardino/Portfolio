import React, { Fragment } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  border-radius:10px;
  transition: transform 0.2s, opacity 0.2s;
  text-align: center;
  padding:10px;
  margin:5px;
  border: 1px solid darkblue;
  :hover {
    transform: scale(4);
    z-index: 2;
    background-color: white;
  }
  :hover .image {
    opacity: 0.2;
    background-color: lightgrey;
  }
  .image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    border-radius:10px;
    opacity: 1;
    background-color: transparent;
    transition:  opacity 0.2s ease-out;
  }
  .text {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    color:black;
    padding:5px;
    border-radius:10px;
    transition: opacity 0.2s ease-in;
    font-size: 0.4rem;
    overflow-bottom:hidden;
    line-height: 1.1;
    text-align: center;
  }
  .text:hover {
    opacity: 1;
  }
  .separator{
    border-style:solid;
    border-width: 1px;
    margin-bottom: 10px;
    margin-left:auto;
    margin-right:auto;
    width:70%;
  }
`

const Styledstrong = styled.strong`
  font-size: 0.6rem;
l
`

const About = ({ className, title = 'Who Am I?', whoIam }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {whoIam.map(character => (
          <Container key={character.whatIam}>
            <img
              className="image"
              src={character.image}
              alt={character.details}
            />
            <div className="text">
              <Styledstrong>{character.whatIam}</Styledstrong>
              <hr className='separator'/>
              {character.details}
            </div>
          </Container>
        ))}
      </div>
    </div>
  )
}

export default About
