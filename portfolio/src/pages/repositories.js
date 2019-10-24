import React from 'react'
import styled from 'styled-components'
import Timeline from '../components/timeline'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import Skills from '../components/skills'
import siteConfig from '../../data/siteConfig'
import Repositories from '../components/repositories'


const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 200px;
`



class Details extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Wrapper className={this.props.className}>
          <Repositories />
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Details)``
