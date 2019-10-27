import styled from 'styled-components'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  display: flex;
  flex-direction: column;
  animation-play-state: paused;
  width: 100%;
  margin: 10em auto 10px auto;
  padding: 30px;
  justify-content: center;

  @media (min-width: 780px) {
    position: relative;
    border-radius: 3px;
    width: 80%;
    max-width: 960px;
    word-wrap: break-word;
    margin: 4em auto 10px auto;
    padding: 10px;
    min-height: 150px;
    text-align: center;
  }
`

export default Wrapper
