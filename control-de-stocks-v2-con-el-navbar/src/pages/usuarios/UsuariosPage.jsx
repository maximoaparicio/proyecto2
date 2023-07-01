import { useState, useEffect } from "react";
import UsuariosTable from "./UsuariosTable";
import axios from "axios";

const UsuariosPage = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  //procedimiento mostrar productos
  const getUsuarios = async () => {
    const res = await axios.get("http://localhost:3000/api/usuarios");
    setUsuarios(res.data);
  };

  //procedimiento para eliminar un producto
  const deleteUsuario = async (id) => {
    await axios.delete(`http://localhost:3000/api/usuarios/${id}`);
    getUsuarios();
  };
  return (
    <div>
      <UsuariosTable data={usuarios} deleteUsuario={deleteUsuario} />
    </div>
  );
};

export default UsuariosPage;
