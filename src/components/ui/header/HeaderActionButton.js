import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Label, Row } from 'reactstrap'

export const HeaderActionButton = ({ label, text, ...rest }) => (
  <Row>
    <Col className="d-flex align-items-center">
      <Label for="id-button-header-action" className="p-4 font-size-14">
        {label}
      </Label>
      <Button
        outline
        color="primary"
        id="id-button-header-action"
        className="rounded-pill"
        style={{ paddingLeft: '1.8rem', paddingRight: '1.8rem' }}
        {...rest}
      >
        {text}
      </Button>
    </Col>
  </Row>
)

HeaderActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
