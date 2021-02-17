import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Card,
  Button,
  CardImg,
  CardBody,
  Form,
  CardTitle,
  FormGroup,
  Col,
} from 'reactstrap'
import { InputText } from '../../ui/inputs/InputText'
import Logo from '../../../assets/img/logo.svg'
import Password from '../../../assets/img/password.svg'
import Email from '../../../assets/img/email.svg'
import { Link } from 'react-router-dom'
import { RouteMap } from '../../../constants/RouteMap'

export const LoginForm = () => {
  const { register, errors } = useForm()
  return (
    <>
      <Card style={{ width: '30rem', border: 'none' }}>
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

          <Form>
            <FormGroup className="mt-5 position-relative ">
              <InputText
                id="email"
                name="email"
                placeholder="Correo Electrónico"
                errors={errors}
                type="email"
                icon={Email}
                innerRef={register({
                  required: true,
                })}
                className="inputText"
              />
            </FormGroup>

            <InputText
              id="password"
              name="password"
              placeholder="Contraseña"
              errors={errors}
              icon={Password}
              type="password"
              innerRef={register({
                required: true,
              })}
              className="inputText"
            />

            <Col className="col text-center">
              <Button
                outline
                color="primary"
                data-testid=""
                id=""
                className="rounded-pill font-size-14 mt-5 inputButton mb-4"
              >
                Iniciar sesión
              </Button>
            </Col>
            <Col className="col text-center">
              <Link
                prop
                to={RouteMap.Home.forgot()}
                className="font-size-18 color-purple-text mt-2 text-center"
              >
                ¿Olvidaste Tu Contraseña?
              </Link>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </>
  )
}
