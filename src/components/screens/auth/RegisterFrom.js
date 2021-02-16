import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'reactstrap'
import { InputText } from '../../ui/inputs/InputText'

export const RegisterFrom = () => {
  const { register, errors } = useForm()
  return (
    <Form>
      <InputText
        id="nickname"
        name="nickname"
        placeholder="Nombre"
        errors={errors}
        innerRef={register({
          required: true,
        })}
      />
    </Form>
  )
}
