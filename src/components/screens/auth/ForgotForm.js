import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Card,
  Button,
  CardImg,
  CardBody,
  CardText,
  Form,
  CardTitle,
  FormGroup,
  Col,
} from 'reactstrap'
import { InputText } from '../../ui/inputs/InputText'
import Logo from '../../../assets/img/logo.svg'
import Email from '../../../assets/img/email.svg'

export const ForgotForm = () => {
  const { register, errors } = useForm()

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
            Reasignar Contraseña
          </CardTitle>
          <CardText className="font-size-18 color-purple-text mt-4 text-center">
            Te enviaremos un correo electrónico con un enlace privado para que
            reasignes tu contraseña.
          </CardText>
          <Form classname=" ">
            <InputText
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              errors={errors}
              icon={Email}
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
                className="rounded-pill font-size-14 mt-5 inputButton"
              >
                Enviar Enlace
              </Button>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </>
  )
}
