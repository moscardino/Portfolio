import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
  width: 8rem;
  height: 8rem;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -4em;
  border-radius: 50%;
  transition: transform 0.2s, opacity 0.2s;
  text-align: center;
  padding: 20px;
  :hover {
    transform: scale(5);
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
    border-radius: 50%;
    opacity: 1;
    background-color: transparent;
    transition: opacity 0.2s ease-out;
  }
  .text {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    color: black;
    padding: 30px 15px 30px 15px ;
    border-radius: 50%;
    transition: opacity 0.2s ease-in;
    font-size: 0.3rem;
    overflow-bottom: hidden;
    line-height: 1.1;
    text-align: center;
  }
  .text:hover {
    opacity: 1;
  }
  .separator {
    border-bottom-style: solid;
    border-width: 1px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }
`

const Styledstrong = styled.strong`
  font-size: 0.5rem;
l
`

export default function WhoIamCard(props) {
  return (
    <Container key={props.character.whatIam} className={props.deg}>
      <img
        className="image"
        src={props.character.image}
        alt={props.character.details}
      />
      <div className="text">
        <Styledstrong>{props.character.whatIam}</Styledstrong>
        <hr className="separator" />
        {props.character.details}
      </div>
    </Container>
  )
}
