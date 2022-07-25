import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridColumns, GridRowId } from '@mui/x-data-grid';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DataGridColaborador() {
  const [colaboradores, setColaboradores] = useState([]);
  const navegar = useNavigate();
  const editarColaborador = (id: GridRowId) => () => {
    navegar(`/cadastro/${id}`);
  };

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'nome', headerName: 'NOME', width: 700 },
    {
      field: 'opcoes', headerName: 'EDITAR', width: 70, editable: false, sortable: false, filterable: false, hideable: false, type: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            key={id}
            icon={<EditIcon />}
            label="Editar"
            className="textPrimary"
            onClick={editarColaborador(id)}
            color="inherit"
          />
        ];
      }
    }
  ];

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/login/obter_colaboradores/')
      .then(resposta => {
        setColaboradores(resposta.data.colaboradores);
      })
      .catch(erro => {
        console.log(erro);
      });
  }, []);

  return (
    <Box
      sx={{
        width: '100%', height: 500
      }}
    >
      <h2>Lista De Colaboradores</h2>
      <DataGrid
        rows={colaboradores}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        editMode={'row'}
      />
    </Box>
  );
}