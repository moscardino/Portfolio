import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import Skills from '../components/skills'
import siteConfig from '../../data/siteConfig'


class Details extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Wrapper className={this.props.className}>
        <Skills title="Skills" skills={siteConfig.skills} />{' '}
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Details)``
