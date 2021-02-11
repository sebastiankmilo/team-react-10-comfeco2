import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Col, Row } from "antd";

import { LoginScreen } from "../../components/auth/LoginScreen";
import { RecoveryScreen } from "../../components/auth/RecoveryScreen";
import { Navbar } from "../../components/ui/Navbar";

export const AuthRouter = () => {
  return (
    <>
      <Navbar />
      <Row justify="center" align="middle" className="layout_content">
        <Col>
          <Switch>
            <Route component={LoginScreen} path="/login" exact />
            <Route component={RecoveryScreen} path="/login/recovery" exact />
            <Redirect to="/" />
          </Switch>
        </Col>
      </Row>
    </>
  );
};
