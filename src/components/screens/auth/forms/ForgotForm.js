import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Card,
  Button,
  CardImg,
  CardBody,
  CardText,
  Form,
  CardTitle,
  Col,
} from 'reactstrap'

import { InputText } from '../../../ui/inputs/InputText'
import { Loader } from '../../../../components/ui/common/Loader'
import { useAuthState, useContextDispatch } from '../../../../hooks'
import * as AuthAction from '../../../../actions/AuthAction'

import Logo from '../../../../assets/img/logo.svg'
import EmailIcon from '../../../../assets/img/email.svg'

export const ForgotForm = () => {
  const [user, setUser] = useState({ email: '' })
  const [isSent, setIsSent] = useState(false)
  const dispatch = useContextDispatch()

  const { isRequesting } = useAuthState()

  const { register, errors, handleSubmit } = useForm()

  const handleChange = ({ name, value }) => {
    setUser({ ...user, [name]: value })
  }

  const onSubmit = () => {
    const { email } = user
    dispatch(AuthAction.requestResetPassword(email))
    setIsSent(true)
  }

  const { email } = user
  return (
    <>
      <Card className="border-0" style={{ width: '30rem' }}>
        <CardImg
          top
          src={Logo}
          alt="logo-comfeco"
          height="90px"
          className="mt-3"
        />
        <CardBody>
          <CardTitle
            tag="h1"
            className="text-center font-size-34 color-purple-text mt-4"
            style={{
              fontWeight: '500',
              color: '#756585',
            }}
          >
            Restablecer Contraseña
          </CardTitle>
          {isSent && !isRequesting ? (
            <CardText className="font-size-18 color-purple-text mt-4 text-center">
              Te enviaremos un correo electrónico con un enlace privado para que
              reasignes tu contraseña.
            </CardText>
          ) : isRequesting ? (
            <Loader />
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputText
                id="email"
                name="email"
                icon={EmailIcon}
                value={email}
                className="inputText"
                placeholder="Correo Electrónico"
                onChange={handleChange}
                errors={errors}
                innerRef={register({
                  required: 'El email es obligatorio',
                })}
              />
              <Col className="col text-center">
                <Button
                  outline
                  color="primary"
                  className="rounded-pill font-size-14 mt-5 inputButton"
                >
                  Enviar Enlace
                </Button>
              </Col>
            </Form>
          )}
        </CardBody>
      </Card>
    </>
  )
}
