import React from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'

import { Flex } from '../../ui/common/Flex'
import { useRedirectIfAuthenticated } from '../../../hooks'
import Logo from '../../../assets/img/logo.svg'

export const TermsScreen = () => {
  useRedirectIfAuthenticated()
  return (
    <Flex justify="center" align="center" className="h-100">
      <>
        <Card
          className="border-0 w-100"
          style={{ maxWidth: '55rem', minWidth: '30rem' }}
        >
          <CardImg
            top
            src={Logo}
            alt="logo-comfeco"
            height="90px"
            className="mt-3"
          />
          <CardBody>
            <CardTitle
              className="text-center font-size-34 color-purple-text mt-4"
              style={{
                fontWeight: '500',
                color: '#756585',
              }}
              tag="h1"
            >
              Terminos y condiciones
            </CardTitle>
            <CardText
              className="font-size-18 color-purple-text mt-4 text-justify"
              style={{
                overflowY: 'scroll',
                maxHeight: '45vh',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              eros nisi, cursus et fermentum at, rhoncus sit amet est. Mauris
              non elit eu leo lobortis laoreet id et nisi. Maecenas vel justo
              bibendum, dapibus nulla nec, maximus nunc. Curabitur eu mauris
              venenatis, elementum leo ut, aliquam quam. Nullam nisi ex,
              pellentesque non erat ut, tempus interdum lectus. Etiam at
              tristique neque. Maecenas tincidunt in lectus eget euismod. Nulla
              facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin eros nisi, cursus et fermentum at, rhoncus sit amet est.
              Mauris non elit eu leo lobortis laoreet id et nisi. Maecenas vel
              justo bibendum, dapibus nulla nec, maximus nunc. Curabitur eu
              mauris venenatis, elementum leo ut, aliquam quam. Nullam nisi ex,
              pellentesque non erat ut, tempus interdum lectus. Etiam at
              tristique neque. Maecenas tincidunt in lectus eget euismod.
              <br />
              <br /> Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin eros nisi, cursus et fermentum at, rhoncus
              sit amet est. Mauris non elit eu leo lobortis laoreet id et nisi.
              Maecenas vel justo bibendum, dapibus nulla nec, maximus nunc.
              Curabitur eu mauris venenatis, elementum leo ut, aliquam quam.
              Nullam nisi ex, pellentesque non erat ut, tempus interdum lectus.
              Etiam at tristique neque. Maecenas tincidunt in lectus eget
              euismod. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin eros nisi, cursus et fermentum at, rhoncus
              sit amet est. Mauris non elit eu leo lobortis laoreet id et nisi.
              Maecenas vel justo bibendum, dapibus nulla nec, maximus nunc.
              Curabitur eu mauris venenatis, elementum leo ut, aliquam quam.
              Nullam nisi ex, pellentesque non erat ut, tempus interdum lectus.
              Etiam at tristique neque. Maecenas tincidunt in lectus eget
              euismod. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin eros nisi, cursus et fermentum at, rhoncus
              sit amet est. <br />
              <br /> Mauris non elit eu leo lobortis laoreet id et nisi.
              Maecenas vel justo bibendum, dapibus nulla nec, maximus nunc.
              Curabitur eu mauris venenatis, elementum leo ut, aliquam quam.
              Nullam nisi ex, pellentesque non erat ut, tempus interdum lectus.
              Etiam at tristique neque. Maecenas tincidunt in lectus eget
              euismod. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin eros nisi, cursus et fermentum at, rhoncus
              sit amet est. Mauris non elit eu leo lobortis laoreet id et nisi.
              Maecenas vel justo bibendum, dapibus nulla nec, maximus nunc.
              Curabitur eu mauris venenatis, elementum leo ut, aliquam quam.
              Nullam nisi ex, pellentesque non erat ut, tempus interdum lectus.
              Etiam at tristique neque. Maecenas tincidunt in lectus eget
              euismod. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin eros nisi, cursus et fermentum at, rhoncus
              sit amet est. <br />
              <br />
              Mauris non elit eu leo lobortis laoreet id et nisi. Maecenas vel
              justo bibendum, dapibus nulla nec, maximus nunc. Curabitur eu
              mauris venenatis, elementum leo ut, aliquam quam. Nullam nisi ex,
              pellentesque non erat ut, tempus interdum lectus. Etiam at
              tristique neque. Maecenas tincidunt in lectus eget euismod. Nulla
              facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin eros nisi, cursus et fermentum at, rhoncus sit amet est.
              Mauris non elit eu leo lobortis laoreet id et nisi. Maecenas vel
              justo bibendum, dapibus nulla nec, maximus nunc. Curabitur eu
              mauris venenatis, elementum leo ut, aliquam quam. Nullam nisi ex,
              pellentesque non erat ut, tempus interdum lectus. Etiam at
              tristique neque. Maecenas tincidunt in lectus eget euismod. Nulla
              facilisi.
            </CardText>
          </CardBody>
        </Card>
      </>
    </Flex>
  )
}
