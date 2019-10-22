import React, { Fragment } from 'react'
import ReactTooltip from 'react-tooltip'

export default ({ title = 'about', whoIam }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {whoIam.map(character => (
          <div style={{ width: '6rem' }}>
            <ReactTooltip id={character.whatIam} type="light">
              <div style={{width: '6rem'}}>{character.details}</div>
            </ReactTooltip>
            <img
              src={character.image}
              alt={character.details}
              data-tip=""
              data-for={character.whatIam}
            />
            <strong style={{fontSize: '0.8rem'}}>{character.whatIam}</strong>
          </div>
        ))}
      </div>
    </Fragment>
  )
}
