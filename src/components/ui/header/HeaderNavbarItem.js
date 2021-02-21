import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { NavItem, NavLink } from 'reactstrap'

export const HeaderNavbarItem = ({ children, to, ...rest }) => (
  <NavItem>
    <NavLink tag={RouterNavLink} {...rest} to={to} activeClassName="active">
      {children}
    </NavLink>
  </NavItem>
)
