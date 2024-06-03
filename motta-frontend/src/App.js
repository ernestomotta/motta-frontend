import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import List from "./Pages/List";
import Form from "./Pages/Form";
import { createContext, useState } from "react";

export const StateContext = createContext({});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<List />} />
      <Route path="/form" element={<Form />} />
    </>
  )
);

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      nombre: "Juan",
      apellido: "Perez",
      fechaNacimiento: "1990-01-01",
      puesto: "Desarrollador",
      sueldo: 1000,
    },
    {
      id: 2,
      nombre: "Maria",
      apellido: "Gonzalez",
      fechaNacimiento: "1995-01-01",
      puesto: "Desarrollador",
      sueldo: 2000,
    },
    {
      id: 3,
      nombre: "Pedro",
      apellido: "Rodriguez",
      fechaNacimiento: "1992-01-01",
      puesto: "Desarrollador",
      sueldo: 3000,
    },
  ]);
  const [selectedUser, setSelectedUser] = useState({});
  const [isNew, setIsNew] = useState(true);

  return (
    <div className="App">
      <StateContext.Provider
        value={{
          list,
          setList,
          selectedUser,
          setSelectedUser,
          isNew,
          setIsNew,
        }}
      >
        <RouterProvider router={router} />
      </StateContext.Provider>
    </div>
  );
}

export default App;
