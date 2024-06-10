const url = "https://665e43e61e9017dc16ef7f04.mockapi.io/api/v1/lista";

export const getList = async (setCallback) => {
  const response = await fetch(`${url}`, { method: "GET" });
  if (response.status === 200) {
    const data = await response.json();
    setCallback(data);
  } else {
    setCallback(
      [],
      "Ups!",
      "Ha ocurrido un error al obtener la lista de empleados, intente de nuevo más tarde."
    );
  }
};

export const createUser = async (data, openNotification, navigate) => {
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.status === 201) {
    openNotification(
      "Empleado creado",
      "El empleado ha sido creado correctamente."
    );
    navigate("/");
  } else {
    openNotification(
      "Ups!",
      "Ha ocurrido un error al crear el empleado, intente de nuevo más tarde."
    );
  }
};

export const updateUser = async (data, openNotification, navigate) => {
  const response = await fetch(`${url}/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.status === 200) {
    openNotification(
      "Empleado actualizado",
      "El empleado ha sido actualizado correctamente."
    );
    navigate("/");
  } else {
    openNotification(
      "Ups!",
      "Ha ocurrido un error al actualizar el empleado, intente de nuevo más tarde."
    );
  }
};

export const deleteUser = async (id, openNotification, getList) => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });

  if (response.status === 200) {
    openNotification(
      "Empleado eliminado",
      "El empleado ha sido eliminado correctamente."
    );
    getList();
  } else {
    openNotification(
      "Ups!",
      "Ha ocurrido un error al eliminar el empleado, intente de nuevo más tarde."
    );
  }
};
