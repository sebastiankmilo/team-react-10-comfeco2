import React, { useState } from 'react'
import { Card, Form, Input, Button, Spin } from 'antd'
import { useHistory } from 'react-router-dom'
import { RouteMap } from '../../constants/RouteMap'

export const RecoveryForm = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = (values) => {
    console.log('Success:', values)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  const handleReturn = () => {
    setLoading(true)
    setTimeout(() => {
      history.push(RouteMap.Home.login())
    }, 100)
  }

  if (loading) return <Spin />
  return (
    <Card
      title="Recuperar contraseña"
      hoverable
      className="card_title"
      // size="small"
    >
      <Form {...layout} onFinish={handleSubmit} name="recovery">
        <Form.Item
          label="Correo"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Por favor introduce tu email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button block type="primary" htmlType="submit">
            Recuperar
          </Button>
          <Button type="link" onClick={handleReturn}>
            Iniciar sesión
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
}
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
}
