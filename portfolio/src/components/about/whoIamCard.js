import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
margin:10px 0px 10px 0px;

.image {
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  opacity: 1;
  padding: 3px;
  background-color: transparent;
  transition: opacity 0.2s ease-out;
}
.text {
  height: 100%;
  width: 100%;
  color: black;
  font-size: 1rem;
  overflow-bottom: hidden;
  line-height: 1.1;
  padding-left:4px;
}

.separator {
  border-bottom-style: solid;
  border-bottom-color:#026680;
  border-width: 1px;
  margin: 4px 0px 8px 0px;
  width: 70%;
}
.strong{
  font-size: 1.1rem;
}
 @media (min-width: 780px) {
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
    z-index: 4;
    background-color: white;
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
  }
  :hover .image {
    opacity: 0.2;
    background-color: #9FEDD7;
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
    padding: 3px;
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
    padding: 30px 20px 30px 20px;
    border-radius: 50%;
    transition: opacity 0.2s ease-in;
    font-size: 0.2rem;
    overflow-bottom: hidden;
    line-height: 1.1;
    text-align: center;
  }
  .text:hover {
    opacity: 1;
  }
  .strong{
    font-size: 0.4rem;
  }
  .separator {
    border-bottom-style: solid;
    border-bottom-color:#026680;
    border-width: 1px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }
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
        <strong className="strong">{props.character.whatIam}</strong>
        <hr className="separator" />
        {props.character.details}
      </div>
    </Container>
  )
}
