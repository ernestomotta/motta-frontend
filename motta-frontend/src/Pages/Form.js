import React, { useContext } from "react";
import { StateContext } from "../App";
import { Button, Checkbox, Form as AntdForm, Input, Divider } from "antd";

const Form = () => {
  const { selectedUser, isNew } = useContext(StateContext);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Divider orientation="left">
        {isNew ? "Nuevo Empleado" : "Editar Empleado"}
      </Divider>
      <AntdForm
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      ></AntdForm>
    </>
  );
};

export default Form;
