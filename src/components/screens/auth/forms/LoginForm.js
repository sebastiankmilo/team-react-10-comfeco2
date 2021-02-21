import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Card,
  Button,
  CardImg,
  CardBody,
  Form,
  CardTitle,
  Col,
} from 'reactstrap'
import { Link } from 'react-router-dom'

import { InputText } from '../../../ui/inputs/InputText'
import Password from '../../../../assets/img/password.svg'
import Email from '../../../../assets/img/email.svg'
import { RouteMap } from '../../../../constants/RouteMap'
import { useAuthState, useContextDispatch } from '../../../../hooks'
import { Loader } from '../../../ui/common/Loader'
import * as AuthAction from '../../../../actions/AuthAction'
import Logo from '../../../../assets/img/logo.svg'

export const LoginForm = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const { isRequesting } = useAuthState()
  const dispatch = useContextDispatch()

  const { register, errors, handleSubmit } = useForm()

  const handleChange = ({ name, value }) => {
    setUser({ ...user, [name]: value })
  }

  const onSubmit = () => {
    const { email, password } = user
    dispatch(AuthAction.login(email, password))
  }

  const { email, password } = user

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
            className="text-center font-size-34 color-purple-text mt-4"
            style={{
              fontWeight: '500',
              color: '#756585',
            }}
            tag="h1"
          >
            Login
          </CardTitle>
          {isRequesting ? (
            <Loader />
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputText
                id="email"
                name="email"
                icon={Email}
                value={email}
                placeholder="Correo Electrónico"
                onChange={handleChange}
                errors={errors}
                innerRef={register({
                  required: 'Campo obligatorio',
                  pattern: {
                    value: /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/i,
                    message: 'El Email debe ser valido',
                  },
                })}
                className="inputText"
              />
              <InputText
                id="password"
                name="password"
                icon={Password}
                type="password"
                value={password}
                placeholder="Contraseña"
                onChange={handleChange}
                errors={errors}
                innerRef={register({
                  required: 'Campo obligatorio',
                })}
                className="inputText"
              />

              <Col className="col text-center">
                <Button
                  outline
                  color="primary"
                  type="submit"
                  className="rounded-pill font-size-14 mt-5 inputButton mb-4"
                >
                  Iniciar sesión
                </Button>
              </Col>
              <Col className="col text-center">
                <Link
                  to={RouteMap.Home.forgot()}
                  className="font-size-18 color-purple-text mt-2 text-center"
                >
                  ¿Olvidaste Tu Contraseña?
                </Link>
              </Col>
            </Form>
          )}
        </CardBody>
      </Card>
    </>
  )
}
