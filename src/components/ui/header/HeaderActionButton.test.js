import React from 'react'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { HeaderActionButton } from './HeaderActionButton'

const defaultProps = {
  label: 'Label text',
  text: 'text button',
  onClick: jest.fn(),
}

const renderHeaderActionButton = (props = defaultProps) =>
  render(<HeaderActionButton {...props} />)

describe('<HeaderActionButton />', () => {
  const idButton = 'JqTayoZFEj-QA'
  it('should render label text', () => {
    const { queryByText } = renderHeaderActionButton()
    expect(queryByText(defaultProps.label)).toBeInTheDocument()
  })
  it('should render button text', () => {
    const { queryByText } = renderHeaderActionButton()
    expect(queryByText(defaultProps.text)).toBeInTheDocument()
  })
  it('should click button', () => {
    const { getByTestId } = renderHeaderActionButton()
    userEvent.click(getByTestId(idButton))
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
})
