import React from 'react'
import styled from 'styled-components'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaDownload,
} from 'react-icons/fa'
import siteConfig from '../../../data/siteConfig'
import './owlanimation.css'

const Separator = styled.hr`
  margin-top: -10px;
  width: 60%;
  margin: auto;
  margin-bottom: 6px;
`

const SocialGroup = styled.div`
  position: relative;
  margin: 0px auto auto auto;
  padding-top: 5px;
  text-align: center;
`
const GitHubLink = styled.a`
  padding: 8px;
  color: #555;
  :hover {
    color: #fce181;
  }
`
const LinkedinLink = styled.a`
  padding: 8px;
  color: #555;
  :hover {
    color: #026680;
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
    color: #9fedd7;
  }
`

const CVLink = styled.a`
  padding: 8px;
  color: #555;
  :hover {
    color: #25303b; /*darkgrey*/
  }
`

export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SocialGroup>
          <svg className='flyinowl'
            id="Capa_1"
            enable-background="new 0 0 512 512"
            height="80"
            viewBox="0 0 512 512"
            width="80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m131.724 8.301v97.732l66.28-57.995-52.54-45.972c-5.356-4.687-13.74-.883-13.74 6.235z"
              fill="#966a5b"
            />
            <path
              d="m380.275 8.301v97.732l-66.28-57.995 52.539-45.972c5.358-4.687 13.741-.883 13.741 6.235z"
              fill="#b57f5f"
            />
            <path
              d="m181.435 512c-.866 0-1.748-.138-2.621-.429-4.337-1.44-6.683-6.133-5.235-10.478l24.855-74.565c1.44-4.337 6.109-6.699 10.478-5.235 4.337 1.44 6.683 6.133 5.235 10.478l-24.855 74.565c-1.158 3.471-4.386 5.664-7.857 5.664z"
              fill="#ffc250"
            />
            <path
              d="m206.29 512h-57.995c-4.579 0-8.285-3.706-8.285-8.285s3.706-8.285 8.285-8.285h57.995c4.579 0 8.285 3.706 8.285 8.285s-3.706 8.285-8.285 8.285z"
              fill="#ffd064"
            />
            <path
              d="m330.565 512c-3.471 0-6.699-2.193-7.856-5.664l-24.855-74.565c-1.448-4.345.898-9.037 5.235-10.478 4.377-1.464 9.029.898 10.478 5.235l24.855 74.565c1.448 4.345-.898 9.037-5.235 10.478-.874.291-1.756.429-2.622.429z"
              fill="#ffc250"
            />
            <path
              d="m363.705 512h-57.995c-4.579 0-8.285-3.706-8.285-8.285s3.706-8.285 8.285-8.285h57.995c4.579 0 8.285 3.706 8.285 8.285s-3.705 8.285-8.285 8.285z"
              fill="#ffd064"
            />
            <path id='aladx'
              d="m413.416 197.169c19.054 26.952 39.017 72.288 41.121 113.783 2.313 45.609-8.737 87.184-28.118 116.656-3.237 4.923-10.451 4.945-13.829.117-26.479-37.841-40.599-73.14-40.599-73.14z"
              fill="#d19a6e"
            />
            <path id='alasx'
              d="m98.584 197.169c-19.054 26.951-39.016 72.287-41.121 113.782-2.313 45.609 8.737 87.184 28.118 116.657 3.237 4.923 10.451 4.945 13.829.117 26.479-37.841 40.599-73.14 40.599-73.14z"
              fill="#c38c66"
            />
            <path
              d="m421.701 238.594c0-11.194-.653-22.189-1.919-32.922-12.192-103.342-80.879-89.672-163.782-89.672-91.514 0-157 3.626-157 122.594s65.486 204.906 157 204.906c32.204 0 62.243-1.422 87.678-22.087 46.843-38.059 78.023-105.717 78.023-182.819z"
              fill="#eac89f"
            />
            <path
              d="m280.855 437.435c-91.514 0-165.701-96.443-165.701-215.411 0-4.011.146-8.288.313-12.245l-9.55-10.029-13.688 5.918c-1.267 10.734-1.93 21.73-1.93 32.926 0 118.968 74.187 215.411 165.701 215.411 32.192 0 62.25-11.941 87.678-32.592-19.37 10.322-40.593 16.022-62.823 16.022z"
              fill="#d2af8c"
            />
            <g>
                       
            <path id='testa'
              d="m98.75 201.25c3.506.42 16.717 8.529 16.717 8.529 30.114 6.687 82.516 23.067 130.3 61.579 5.951 4.797 14.514 4.797 20.466 0 66.015-53.205 140.851-64.164 153.549-65.686-12.194-103.339-80.88-182.489-163.782-182.489-22.236 0-43.449 5.694-62.823 16.022-6.769 3.608-12.453 9.019-18.551 13.587-41.526 31.102-68.096 82.521-75.876 148.458z"
              fill="#d19a6e"
            />
            
          </g>
            <path
              d="m280.855 143.316h-49.71l-6.214 37.283 24.441 32.588c3.314 4.419 9.942 4.419 13.256 0l24.441-32.588z"
              fill="#ffd064"
            />
            <circle cx="309.853" cy="143.316" fill="#fff5d7" r="53.853" />
            <circle cx="202.147" cy="143.316" fill="#fff5d7" r="53.853" />
            <circle cx="202.147" cy="143.316" fill="#ffd064" r="37.283" />
            <circle cx="309.853" cy="143.316" fill="#ffd064" r="37.283" />
            <path
              d="m115.467 209.779c3.105-71.997 33.348-134.546 77.71-170.574-52.866 28.171-92.021 90.842-100.948 166.462 3.499.42 11.797 1.575 23.238 4.112z"
              fill="#c38c66"
            />
            <g fill="#5d5360">
              <circle class='pupilla' cx="202.147" cy="143.316" r="20.713" />
              <circle class='pupilla' cx="309.853" cy="143.316" r="20.713" />
            </g>
            <circle id='palpsx' cx="202.147" cy="143.316" fill="#d19a6e" r="53.853" />
            <circle id='palpdx' cx="309.853" cy="143.316" fill="#d19a6e" r="53.853" />
           
          </svg>{' '}
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
          <CVLink className={'social-link CV'} href={siteConfig.social.CV}>
            <FaDownload size={32} />
          </CVLink>
        </SocialGroup>
      </React.Fragment>
    )
  }
}
