import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'
import siteConfig from '../../../data/siteConfig'

const Separator = styled.hr`
  margin-top: -10px;
  width:60%;
  margin:auto;
  margin-bottom: 6px;
`

const SocialGroup = styled.div`
  margin: 0px auto auto auto;
  padding-top: 5px;
  text-align: center;
`
const GitHubLink = styled.a`
  padding: 8px;
  color: #555;
  :hover {
    color: #24292e;
  }
`
const LinkedinLink = styled.a`
  padding: 8px;
  color: #555;
  :hover {
    color: #0077b5;
  }
`
const TwitterLink = styled.a`
  padding: 8px;
  color: #555;
  :hover {
    color: #1da1f2;
  }
`
const EmailLink = styled.a`
  padding: 8px;
  color: #555;
  :hover {
    color: #c23a2b;
  }
`

export default class Footer extends React.Component {
  render() {
    return (
      <SocialGroup>
        <Separator />
        {siteConfig.social.github && (
          <GitHubLink
            className="social-link github"
            href={siteConfig.social.github}
          >
            <FaGithub className="social-icon" size="32" />
          </GitHubLink>
        )}
        {siteConfig.social.linkedin && (
          <LinkedinLink
            className="social-link linkedin"
            href={siteConfig.social.linkedin}
          >
            <FaLinkedin className="social-icon" size="32" />
          </LinkedinLink>
        )}
        {siteConfig.social.twitter && (
          <TwitterLink
            className="social-link twitter"
            href={siteConfig.social.twitter}
          >
            <FaTwitter className="social-icon" size="32" />
          </TwitterLink>
        )}
        {siteConfig.social.email && (
          <EmailLink
            className="social-link email"
            href={`mailto:${siteConfig.social.email}`}
          >
            <FaEnvelope className="social-icon" size="32" />
          </EmailLink>
        )}
      </SocialGroup>
    )
  }
}
