import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { FormGroup, Label } from 'reactstrap'
import MessageError from './MessageError'

const InputContainerFrom = ({
  label,
  id,
  message,
  errors,
  name,
  children,
  hasIcon,
  className,
}) => (
  <FormGroup
    className={classNames(className, {
      'mt-5 position-relative': !!hasIcon,
    })}
  >
    {!!label && <Label for={id}>{label}</Label>}
    {children}
    {message && <MessageError error={errors[name]?.message} className="mt-1" />}
  </FormGroup>
)

InputContainerFrom.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
}
export default InputContainerFrom
