import * as React from "react";
import { DataGrid} from '@mui/x-data-grid';
import DashLayout from "../../components/reusableComponents/Layout";
import Box from '@mui/material/Box';

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "Position",
    headerName: "Position",
    description: "Software Engineers.",
    width: 160,

  },
  {
    field: "role",
    headerName: "Role",
    description: "Software Engineers.",
    width: 160,
   
   
  },
];





const rows = [
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 ,Position:"Architecture Engineer", role: "Developer"},
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45,Position:"Full Stack Developer", role: "Software Engineer" },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 ,Position:"Software Engineering", role: "Member"},
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 35,Position:"Electronics Engineer", role: "Admin" },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150,Position:"Software Engineering" , role: "FullStack"},
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 ,Position:"Software Engineering", role: "Admin"},
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36,Position:"Software Engineering", role: "Developer" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65,Position:"Software Engineering" , role: "Member"},
];




export default function DataTable() {
  return (
    
    // <DashLayout siderItems={props.items}>

<div style={{ height: 400, width: '100%' }}>

  
<DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
       
      />
      
      
</div>
      
    // </DashLayout>

  );
}
