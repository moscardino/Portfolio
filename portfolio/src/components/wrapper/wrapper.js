import styled from 'styled-components'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 3px;
  width: 80%;
  max-width: 960px;
  word-wrap: break-word;
  background-color: #fff;
  margin: 130px auto 120px auto;
  padding: 50px;
  min-height: 150px;
  text-align: center;

  @media (max-width: 780px) {
    width: 60%;
    padding: 25px;
  }
`

export default Wrapper
