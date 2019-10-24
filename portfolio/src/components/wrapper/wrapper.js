import styled from 'styled-components'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 3px;
  width: 80%;
  max-width: 960px;
  border-bottom: 1px solid #ebf2f6;
  word-wrap: break-word;
  background-color: #fff;
  margin: 250px auto 30px auto;
  top: -100px;
  padding: 50px;
  min-height: 150px;
  text-align: center;

  @media (max-width: 780px) {
    width: 90%;
    padding: 25px;
  }
`

export default Wrapper
