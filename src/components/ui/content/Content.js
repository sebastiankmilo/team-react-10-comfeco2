import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'

export const Content = ({ children }) => (
  <Container className="content" fluid>
    {children}
  </Container>
)

Content.protoType = {
  children: PropTypes.node,
}
