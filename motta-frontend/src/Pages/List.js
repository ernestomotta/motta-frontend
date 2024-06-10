import { Link } from "react-router-dom";
import { Divider, List as AntdList, Button, Flex } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useContext, useEffect } from "react";
import { StateContext } from "../App";
import { getList, deleteUser } from "../services";
import dayjs from "dayjs";

const List = () => {
  const { setSelectedUser, list, setList, setIsNew, openNotification } =
    useContext(StateContext);

  const handleGetList = (data, message, description) => {
    if (message && description) {
      openNotification(message, description);
    }
    setList(data);
  };

  useEffect(() => {
    getList(handleGetList);
  }, []);

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
        pagination={{
          pageSize: 4,
        }}
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
              <Button
                onClick={() => {
                  deleteUser(each.id, openNotification, () =>
                    getList(handleGetList)
                  );
                }}
              >
                Borrar
              </Button>
            </Flex>
            <Flex gap="middle">
              <p>
                <b>Nombre: </b>
                {each.nombre} {each.apellido}
              </p>
              <p>
                <b>Nacimiento: </b>
                {each.fechaNacimiento
                  ? dayjs(each.fechaNacimiento).format("DD/MM/YYYY")
                  : "No disponible"}
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
