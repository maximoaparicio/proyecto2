import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ProductosForm = () => {
  const notifyAdd = () => {
    toast.success("Producto Agregado!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const notifyUpdate = () => {
    toast.success("Producto Actualizado!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const [productos, setProductos] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    stock: "",
  });

  useEffect(() => {
    getProductoById();
  }, []);

  const { id } = useParams();

  const navigate = useNavigate();

  const getProductoById = async () => {
    try {
      if (id) {
        const res = await axios.get(
          `http://localhost:3000/api/productos/${id}`
        );
        setProductos({
          nombre: res.data.nombre,
          categoria: res.data.categoria,
          precio: res.data.precio,
          stock: res.data.stock,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setProductos({
      ...productos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const res = await axios.patch(
          `http://localhost:3000/api/productos/${id}`,
          productos
        );
        navigate("/productos");
        notifyUpdate();
      } else {
        const res = await axios.post(
          "http://localhost:3000/api/productos",
          productos
        );
        navigate("/productos");
        notifyAdd();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>{id ? "Editar Producto" : "Crear Producto"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="nombre">
            Nombre:
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={productos.nombre}
            onChange={handleChange}
            className="form-control"
          />
          <label className="form-label" htmlFor="categoria">
            Categoria:
          </label>
          <input
            type="text"
            name="categoria"
            id="categoria"
            value={productos.categoria}
            onChange={handleChange}
            className="form-control"
          />
          <label className="form-label" htmlFor="precio">
            Precio:
          </label>
          <input
            type="number"
            name="precio"
            id="precio"
            value={productos.precio}
            onChange={handleChange}
            className="form-control"
          />
          <label className="form-label" htmlFor="stock">
            Stock:
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            value={productos.stock}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ProductosForm;
