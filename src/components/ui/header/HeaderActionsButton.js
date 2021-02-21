import React from 'react'
import PropTypes from 'prop-types'
import { Button, Label } from 'reactstrap'
import { Flex } from '../common/Flex'

export const HeaderActionsButton = ({ label, text, ...rest }) => (
  <Flex align="center" className="navbar-nav ml-auto">
    {label && (
      <Label
        for="id-button-header-action"
        className="p-4 font-size-14 text-dark"
      >
        {label}
      </Label>
    )}
    <Button
      outline
      color="primary"
      id="id-button-header-action"
      className="rounded-pill font-size-14"
      style={{ paddingLeft: '1.8rem', paddingRight: '1.8rem', height: 40 }}
      {...rest}
    >
      {text}
    </Button>
  </Flex>
)

HeaderActionsButton.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string.isRequired,
}
