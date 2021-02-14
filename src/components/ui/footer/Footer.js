import React from 'react'

import { Row, Col, Container } from 'reactstrap'
import { Flex } from '../common/Flex'
import { FooterSocialLink } from './FooterSocialLink'

export const Footer = () => (
  <footer className="footer">
    <Container className="h-100 p-4">
      <Row className="h-100">
        <Flex
          tag={Col}
          align="center"
          justify="center"
          className="justify-content-md-start"
          md={6}
          lg={8}
        >
          <p className="font-size-18 color-purple-text text-center text-sm-start">
            Copyright ©2020 Developed by TeamReact-10
          </p>
        </Flex>
        <Col md={6} lg={4}>
          <Row className="w-100 h-100">
            <Flex
              tag={Col}
              align="center"
              justify="center"
              className="mt-1"
              sm={6}
              md={8}
            >
              <p className="font-size-18 color-purple-text">
                Siguenos en las redes sociales
              </p>
            </Flex>
            <Flex
              tag={Col}
              align="center"
              justify="evenly"
              className="mt-5 mt-sm-0"
              sm={6}
              md={4}
            >
              <FooterSocialLink />
              <FooterSocialLink />
              <FooterSocialLink />
            </Flex>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
)
