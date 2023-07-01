import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import ProductosTable from "./ProductosTable";

const ProductosPage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  const notifyDelete = () => {
    toast.success("Producto Eliminado!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const getProductos = async () => {
    const res = await axios.get("http://localhost:3000/api/productos");
    setProductos(res.data);
  };

  const deleteProducto = async (id) => {
    await axios.delete(`http://localhost:3000/api/productos/${id}`);
    notifyDelete();
    getProductos();
  };

  return (
    <div>
      <ProductosTable data={productos} deleteProducto={deleteProducto} />
    </div>
  );
};

export default ProductosPage;
