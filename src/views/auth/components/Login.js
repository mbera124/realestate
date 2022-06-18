import React, { useState, useEffect } from "react";

import { Button, Checkbox, Form, Input } from "antd";
import Background from "./images/ronnie.jpg";

import { MainDiv, ContainerLogIn, WrapLogin } from "./style";

const LoginPage = (props) => {
  return (
    <MainDiv>
      <ContainerLogIn style={{ backgroundImage: `url(${Background})` }}>
        <WrapLogin>
          <Form
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </WrapLogin>
      </ContainerLogIn>
    </MainDiv>
  );
};
export default LoginPage;
