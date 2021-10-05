import React from 'react'
import PropTypes from 'prop-types'

const Header = function ({ title }) {
  return (
    <header className="header">
      <h1 id="title">{ title }</h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
