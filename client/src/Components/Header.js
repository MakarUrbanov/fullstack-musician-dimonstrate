import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-top-wrapper">
        <NavLink to="/">Dimonstrate</NavLink>
      </div>
      <div className="header-bottom_line" />
    </header>
  )
}
