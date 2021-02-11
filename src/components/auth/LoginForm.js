import React, { useState, useContext } from "react";
import { Card, Form, Input, Button, Spin } from "antd";

import { AppContext } from "../../store/AppContext"; //flujo de datos
import { useHistory } from "react-router-dom"; //enrutador

import { startLogin } from "../../actions/authActions";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AppContext);

  const history = useHistory();
  
  // onAlgo
  // handleAlgo

  const handleSubmit = async (values) => {
    setLoading(true);
    const {ok, msg} = await startLogin(dispatch, values);
    
    if (!ok) {
      setLoading(false)
      console.log(msg)
      if(msg === "Bad credentials") alert("Credenciales incorrectas")
    }
  };

  const handleRecovery = () => {
    setLoading(true);
    setTimeout(() => {
      history.push("/login/recovery");
    }, 500);
  };

  if (loading) return <Spin />;
  return (
    <Card title="Inicio de sesión" hoverable className="card_title">
      <Form
        {...layout}
        onFinish={handleSubmit}
        initialValues={{ email: "edgarolivar16@gmail.com", password: "123456" }}
        name="login"
      >
        <Form.Item
          label="Correo"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Por favor introduce tu email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: "Por favor introduce tu contraseña",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button block type="primary" htmlType="submit">
            Entrar
          </Button>
          <Button type="link" onClick={handleRecovery}>
            Recuperar contraseña
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    // offset: 4,
    span: 24,
  },
};