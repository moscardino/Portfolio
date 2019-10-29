import React from 'react'
import styled from 'styled-components'
import Timeline from '../components/timeline'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'

class Details extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Wrapper className={this.props.className}>
          <Timeline />
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Details)``
