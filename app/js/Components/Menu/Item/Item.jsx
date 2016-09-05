import React from 'react'

import classNames from 'classnames/bind'
import styles from './item.scss'
const cx = classNames.bind(styles)

export default class Item extends React.Component {
  constructor (props) {
    super(props)

    let { active = false, count = 0 } = props

    this.state = {
      active,
      count
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({ active: true })

    this.props.onClick(e)
  }

  render () {
    let { count, active } = this.state

    return (
      <div className={cx('item', { active })} onClick={this.handleClick}>
        {this.props.children}
        {count ? (<div className={cx('count')}>{count}</div>) : ''}
      </div>
    )
  }
}

Item.propTypes = {
  active: React.PropTypes.bool,
  count: React.PropTypes.number,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
  onClick: React.PropTypes.func.isRequired
}