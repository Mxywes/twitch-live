import React from 'react'

import toNow from 'utils/toNow'

import classNames from 'classnames/bind'
import styles from './liveTime.scss'
const cx = classNames.bind(styles)

export default class LiveTime extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      short: true
    }

    this.onFocusHandler = this.onFocusHandler.bind(this)
    this.onBlurHandler = this.onBlurHandler.bind(this)
  }

  onFocusHandler () {
    this.setState({ short: false })
  }

  onBlurHandler () {
    this.setState({ short: true })
  }

  render () {
    let { started } = this.props
    let { short } = this.state

    return (
      <div className={cx('liveTime')} onMouseEnter={this.onFocusHandler} onMouseLeave={this.onBlurHandler}>
        {'live ' + toNow(started, short)}
      </div>
    )
  }
}

LiveTime.propTypes = {
  started: React.PropTypes.string.isRequired
}
