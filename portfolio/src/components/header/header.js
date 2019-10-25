import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import siteConfig from '../../../data/siteConfig'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: #25303b;
`

const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: flex-end;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #25303b;
  @media (min-width: 780px) {
    margin-left: auto;
    margin-right: auto;
    height: 60px;
  }
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  flex-grow: 10;
  @media (min-width: 780px) {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
`

const HeaderLink = styled(Link)`
  position: relative;
  height: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #edeae5; /*grey*/
  border: 0;
  margin: 0;
  padding: 0.3em;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
  :hover {
    color: #fce181; /*solidyellow*/
    font-weight: 500;
    border-bottom-style: solid;
    border-bottom-color: #fef9c7; /*lightyellow*/
    border-bottom-width: 4px;
  }
`
const GithubLink = styled(({ className }) => (
  <a
    className={className}
    href={`https://github.com/${siteConfig.githubUsername}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub size={32} />
  </a>
))`
  position: absolute;
  right: 0;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
  :hover {
    color: #fce181; /*solidyellow*/
  }
  @media (min-width: 780px) {
    position: relative;
    display: flex;
    align-items: center;
  }
`

class Header extends React.Component {
  render() {
    const { headerLinks } = siteConfig

    return (
      <HeaderWrapper>
        <HeaderNav>
          <HeaderLinkGroup>
            {headerLinks.map((headerLink, i) => (
              <HeaderLink to={headerLink.url} key={`header-link-${i}`}>
                {headerLink.label}
              </HeaderLink>
            ))}
          </HeaderLinkGroup>
          <GithubLink />
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}

export default Header
