import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import Swal from 'sweetalert2';

const CustomerTable = () => {
    const [rows, setRows] = useState([]);// Almacenar datos

    useEffect(() => { // Obtener datos en cada render
        const fetchData = async () => {
             const response = await axios.get("http://localhost:3000/eventos");
             setRows(response.data);
         };
         fetchData();
     }, []);

    interface Row {
        id_evento: number;
        Titulo: string;
        Descripcion: string;
        id_usuario: number;
        id_lugar: number;
        id_categoria: number;

    }
    
    const editarCustomer = (id: number) => () => {
        alert(id);
    }

    const eliminarCustomer = (id: Row) => () => {
            // @ts-ignore
    Swal.fire({
        title: "Estas seguro?",
        text: "Esta accion no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si estoy seguro!"
        // @ts-ignore
      }).then((result) => {
        if (result.isConfirmed) {
          // Delete the product from the database
          fetch(`http://localhost:3000/eventos/${id.id_evento}`, {
            method: "DELETE"
          }).then(() => {
              // @ts-ignore
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
          })
          
          
        }
      });
    }

    const columns = [
        {
            name: "id_evento",
            selector: (row: Row) => row.id_evento
        },
        {
            name: "Titulo",
            selector: (row: Row) => row.Titulo
        },
        {
            name: "Descripcion",
            selector: (row: Row) => row.Descripcion
        },
        {
            name: "id_usuario",
            selector: (row: Row) => row.id_usuario
        },
        {
            name: "Id_Lugar",
            selector: (row: Row) => row.id_lugar
        },
        {
            name: "Id_categoria",
            selector: (row: Row) => row.id_categoria
        },
        
        {
            name: "Acciones",
            cell: (row: Row) => <><div id='tableButtons'>
                <button onClick={editarCustomer(row.id_evento)} className="btn btn-primary"><i className="material-icons-outlined">edit</i></button>
                <button onClick={eliminarCustomer(row)} className="btn btn-primary"><i className="material-icons-outlined">delete_forever</i></button>
            </div>
            </>
        }
    ];



  return (
    <div className="container my-5">
        <DataTable columns={columns} data={rows} pagination selectableRows />
    </div>
  )
}

export default CustomerTable