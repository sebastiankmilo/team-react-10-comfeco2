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

/**Componentes propios */
import { InputText } from '../../../ui/inputs/InputText'
import { Loader } from '../../../ui/common/Loader'

import { useAuthState, useContextDispatch } from '../../../../hooks'

import * as AuthAction from '../../../../actions/AuthAction'

// *Iconos de inputs
import Logo from '../../../../assets/img/logo.svg'
import Password from '../../../../assets/img/password.svg'
import Email from '../../../../assets/img/email.svg'
import Icon from '../../../../assets/img/icon.svg'

export const RegisterFrom = () => {
  const [user, setUser] = useState({
    nombre: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const { isRequesting } = useAuthState()
  const dispatch = useContextDispatch()

  const { register, errors, handleSubmit, watch } = useForm()

  const handleChange = ({ name, value }) => {
    setUser({ ...user, [name]: value })
  }

  const onSubmit = () => {
    dispatch(AuthAction.register(user))
  }

  const { nombre, email, password, passwordConfirm } = user

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
            Registrarse
          </CardTitle>
          {isRequesting ? (
            <Loader />
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputText
                id="nombre"
                name="nombre"
                icon={Icon}
                type="nombre"
                value={nombre}
                placeholder="nombre"
                onChange={handleChange}
                errors={errors}
                innerRef={register({
                  required: 'Campo obligatorio',
                })}
                className="inputText"
              />
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
              <InputText
                id="passwordConfirm"
                name="passwordConfirm"
                icon={Password}
                type="password"
                value={passwordConfirm}
                placeholder="Confirmar Contraseña"
                onChange={handleChange}
                errors={errors}
                innerRef={register({
                  required: 'Campo obligatorio',
                  validate: (value) => value === watch('password'),
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
                  Registrarse
                </Button>
              </Col>
            </Form>
          )}
        </CardBody>
      </Card>
    </>
  )
}
