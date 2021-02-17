import React, { useLayoutEffect } from 'react'
import { Col, Row, Spinner } from 'reactstrap'
import { Flex } from './Flex'

export const Loader = (props) => {
  useLayoutEffect(() => {
    const elements = document.getElementsByClassName('sr-only')
    elements[0].innerHTML = ''
  }, [])
  return (
    <Row className="flex-center py-5 h-100">
      <Flex
        tag={Col}
        align="center"
        justify="center"
        className="w-100"
        xs="auto"
      >
        <Spinner {...props} />
      </Flex>
    </Row>
  )
}

Loader.propTypes = { ...Spinner.propTypes }

Loader.defaultProps = {
  type: 'grow',
  size: 'lg',
  color: 'primary',
}
