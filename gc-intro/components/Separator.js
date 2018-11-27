import React from 'react'

export default class Separator extends React.Component {

  render() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', maxWidth: '100vw', top: '0', left: '0'}}>

          <img style={{width: '100vw', position: 'absolute', zIndex: '-1', backgroundPosition: 'center center', backgroundSize: 'cover'}} src={this.props.src} />
          <div style={{backgroundColor: 'white', padding: '.25rem 1rem'}}>
            <span style={{fontSize: '3rem', fontWeight: '500'}}>{this.props.title}</span>
          </div>
        </div>
  )
  }

}