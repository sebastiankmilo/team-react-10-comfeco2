import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'
import InputContainerFrom from './components/InputContainerForm'
import classNames from 'classnames'

export const InputText = ({
  icon,
  name,
  label,
  id,
  value,
  type,
  className,
  placeholder,
  onChange,
  errors,
  ...rest
}) => {
  return (
    <>
      <InputContainerFrom
        label={label}
        id={id}
        errors={errors}
        name={name}
        hasIcon={!!icon}
        message
      >
        <Input
          name={name}
          id={id}
          defaultValue={value}
          type={type}
          onChange={({ target: { value } }) => onChange({ name: name, value })}
          placeholder={placeholder}
          className={classNames(className, {
            'border-danger': errors[name]?.message,
            'add-padding-icon': !!icon,
          })}
          {...rest}
        />
        {icon && <img alt={`${name}-icon`} src={icon} className="InputImg" />}
      </InputContainerFrom>
    </>
  )
}

InputText.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

InputText.defaultProps = {
  required: false,
  type: 'text',
  onChange: () => {},
}
