import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Label, Row } from 'reactstrap'

export const HeaderActionsButton = ({ label, text, ...rest }) => (
  <Row>
    <Col className="d-flex align-items-center">
      {label && (
        <Label for="id-button-header-action" className="p-4 font-size-14">
          {label}
        </Label>
      )}
      <Button
        outline
        color="primary"
        data-testid="JqTayoZFEj-QA"
        id="id-button-header-action"
        className="rounded-pill font-size-14"
        style={{ paddingLeft: '1.8rem', paddingRight: '1.8rem', height: 40 }}
        {...rest}
      >
        {text}
      </Button>
    </Col>
  </Row>
)

HeaderActionsButton.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string.isRequired,
}
