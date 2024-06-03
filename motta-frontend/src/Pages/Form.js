import React, { useContext } from "react";
import { StateContext } from "../App";
import {
  Button,
  Form as AntdForm,
  Input,
  InputNumber,
  Divider,
  DatePicker,
} from "antd";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

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
          ...selectedUser,
          fechaNacimiento: selectedUser.fechaNacimiento
            ? //1995-01-01
              dayjs(selectedUser.fechaNacimiento, "YYYY-MM-DD", "es")
            : dayjs(new Date()),
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <AntdForm.Item
          label="Nombre"
          name="nombre"
          rules={[
            {
              required: true,
              message: "Falta el nombre!",
              min: 1,
              max: 255,
            },
          ]}
        >
          <Input />
        </AntdForm.Item>
        <AntdForm.Item
          label="Apellido"
          name="apellido"
          rules={[
            {
              required: true,
              message: "Falta el apellido!",
              min: 1,
              max: 255,
            },
          ]}
        >
          <Input />
        </AntdForm.Item>
        <AntdForm.Item
          label="Fecha de Nacimiento"
          name="fechaNacimiento"
          rules={[
            {
              required: true,
              message: "Falta la fecha de nacimiento!",
            },
          ]}
        >
          <DatePicker />
        </AntdForm.Item>
        <AntdForm.Item
          label="Puesto"
          name="puesto"
          rules={[
            {
              required: true,
              message: "Falta el puesto!",
              min: 1,
              max: 255,
            },
          ]}
        >
          <Input />
        </AntdForm.Item>
        <AntdForm.Item
          label="Sueldo"
          name="sueldo"
          rules={[
            {
              required: true,
              message: "Falta el sueldo!",
              min: 1,
              max: 255,
            },
          ]}
        >
          <InputNumber />
        </AntdForm.Item>
        <Button type="primary" htmlType="submit">
          Guardar
        </Button>{" "}
        <Link to={`/`}>
          <Button>Regresar</Button>
        </Link>
      </AntdForm>
    </>
  );
};

export default Form;
