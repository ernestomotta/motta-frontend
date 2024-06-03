const url = "https://665e43e61e9017dc16ef7f04.mockapi.io/api/v1";

export const getList = async (setCallback) => {
  try {
    const response = await fetch(`${url}/lista`, { method: "GET" });
    const data = await response.json();
    setCallback(data);
  } catch (error) {
    setCallback(
      [],
      "Ups!",
      "Ha ocurrido un error al obtener la lista de empleados, intente de nuevo más tarde.	"
    );
  }
};

export const createUser = async (data, openNotification, navigate) => {
  try {
    const response = await fetch(`${url}/lista`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    openNotification(
      "Empleado creado",
      "El empleado ha sido creado correctamente."
    );
    navigate("/");
  } catch (error) {
    openNotification(
      "Ups!",
      "Ha ocurrido un error al crear el empleado, intente de nuevo más tarde."
    );
  }
};

export const updateUser = async (data, openNotification, navigate) => {
  try {
    const response = await fetch(`${url}/lista/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    openNotification(
      "Empleado actualizado",
      "El empleado ha sido actualizado correctamente."
    );
    navigate("/");
  } catch (error) {
    openNotification(
      "Ups!",
      "Ha ocurrido un error al actualizar el empleado, intente de nuevo más tarde."
    );
  }
};

export const deleteUser = async (id, openNotification, getList) => {
  try {
    const response = await fetch(`${url}/lista/${id}`, {
      method: "DELETE",
    });
    openNotification(
      "Empleado eliminado",
      "El empleado ha sido eliminado correctamente."
    );
    getList();
  } catch (error) {
    openNotification(
      "Ups!",
      "Ha ocurrido un error al eliminar el empleado, intente de nuevo más tarde."
    );
  }
};
