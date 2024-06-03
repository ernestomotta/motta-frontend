import { Link } from "react-router-dom";
import { Divider, List as AntdList, Button, Flex } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { StateContext } from "../App";

const List = () => {
  const { setSelectedUser, list, setIsNew } = useContext(StateContext);

  return (
    <>
      <Divider orientation="left">
        Empleados{" "}
        <Link to={`/form/`}>
          <Button
            type="primary"
            onClick={() => {
              setSelectedUser({});
              setIsNew(true);
            }}
            icon={<UserAddOutlined />}
            size="medium"
          />
        </Link>
      </Divider>
      <AntdList
        bordered
        dataSource={list}
        renderItem={(each) => (
          <AntdList.Item style={{ justifyContent: "flex-start", gap: "15px" }}>
            <Flex gap="middle" vertical>
              <Link to={`/form/`}>
                <Button
                  type="primary"
                  onClick={() => {
                    setSelectedUser(each);
                    setIsNew(false);
                  }}
                >
                  Editar
                </Button>
              </Link>
              <Button>Borrar</Button>
            </Flex>
            <Flex gap="middle">
              <p>
                <b>Nombre: </b>
                {each.nombre} {each.apellido}
              </p>
              <p>
                <b>Nacimiento: </b>
                {each.fechaNacimiento}
              </p>
              <p>
                <b>Puesto: </b>
                {each.puesto}
              </p>
              <p>
                <b>Sueldo: </b>
                {each.sueldo}
              </p>
            </Flex>
          </AntdList.Item>
        )}
      />
    </>
  );
};

export default List;
