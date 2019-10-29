import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import Repositories from '../components/repositories'

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
