/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export const FooterSocialLink = ({ href = '#' }) => (
  <a
    className="rounded-circle bg-dark"
    style={{ minWidth: 40, minHeight: 40 }}
    href={href}
    target="_blank"
    rel="noreferrer"
  />
)
