import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'
import siteConfig from '../../data/siteConfig'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import './index.css'
import WhoIamCard from '../components/about/whoIamCard'

class Home extends React.Component {
  render() {
    // validate siteConfig settings
    if (siteConfig.googleAnalyticsId === 'UA-000000000-1') {
      console.error(
        'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
      )
    }

    const title = siteConfig.siteTitle
    const whoIam = siteConfig.authorDescription
    const { keywords } = siteConfig
    if (typeof window !== 'undefined') 
    window.loadPromise.then(() =>   document.body.classList.remove('pause-animation'));

    return (
      <Layout location={this.props.location}>
        <SEO title={title} keywords={keywords} />
        <Wrapper className={this.props.className}>
          <div className="circle-container">
            <img
              className="avatar__image"
              src="/images/avatar.jpeg"
              alt="user avatar"
            />
            <WhoIamCard character={whoIam[0]} deg="deg0" />
            <WhoIamCard character={whoIam[1]} deg="deg30" />
            <WhoIamCard character={whoIam[2]} deg="deg60" />
            <WhoIamCard character={whoIam[3]} deg="deg90" />
            <WhoIamCard character={whoIam[4]} deg="deg120" />
            <WhoIamCard character={whoIam[5]} deg="deg150" />
            <WhoIamCard character={whoIam[6]} deg="deg180" />
            <WhoIamCard character={whoIam[7]} deg="deg210" />
            <WhoIamCard character={whoIam[8]} deg="deg240" />
            <WhoIamCard character={whoIam[9]} deg="deg270" />
            <WhoIamCard character={whoIam[10]} deg="deg300" />
            <WhoIamCard character={whoIam[11]} deg="deg330" />
          </div>
          <div className="social">
              {siteConfig.social.github && (
                <a
                  className="social-link github"
                  href={siteConfig.social.github}
                >
                  <FaGithub className="social-icon" size="32" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  className="social-link linkedin"
                  href={siteConfig.social.linkedin}
                >
                  <FaLinkedin className="social-icon" size="32" />
                </a>
              )}
              {siteConfig.social.twitter && (
                <a
                  className="social-link twitter"
                  href={siteConfig.social.twitter}
                >
                  <FaTwitter className="social-icon" size="32" />
                </a>
              )}
              {siteConfig.social.email && (
                <a
                  className="social-link email"
                  href={`mailto:${siteConfig.social.email}`}
                >
                  <FaEnvelope className="social-icon" size="32" />
                </a>
              )}
            </div>
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
    text-align:center;
  }


  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    position:relative;
    z-index:3
  }

  .social {
    margin: 200px auto auto auto;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`
