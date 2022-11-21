import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import applications from '../../components/Assets/applications.json'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function UserApplications() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          
              <>
                   <StyledTableCell>Company</StyledTableCell>
                   <StyledTableCell align="right">JobName</StyledTableCell>
                   <StyledTableCell align="right">ApplicationDate</StyledTableCell>
                   <StyledTableCell align="right">Status</StyledTableCell>
                   </>
          
       
          
          </TableRow>
        </TableHead>
        <TableBody>
          {applications.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.Company}</StyledTableCell>
              <StyledTableCell align="right">{row.JobName}</StyledTableCell>
              <StyledTableCell align="right">{row.ApplicationDate}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
