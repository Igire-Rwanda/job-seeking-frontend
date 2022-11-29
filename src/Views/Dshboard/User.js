import React from 'react';
import { useState, useEffect } from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead, } from '@mui/material';
// import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import View from './View';
// import { useSelect } from '@mui/base';

import { useDispatch, useSelector } from "react-redux";

import { getAllProductAction } from '../../redux/product/actions';


const TableData = [{
  "name": "Snow Jon",
  "post": " Back-end developer",
  "date": "Sep 12th, 2021",
  "delete": "delete",
  "candidates": "View",
  "gender": "Female",
  "ip_address": "68.54.224.213"
}, {
  "name": "Lannister Cersei",
  "post": " Front-end developer",
  "date": "Dec 12th, 2021",
  "delete": "delete",
  "candidates": "View",
  "gender": "Female",
  "ip_address": "32.251.148.67"
}, {
  "name": "Lannister Jaime",
  "post": " Software Engineer",
  "date": "Jan 12th, 2021",
  "delete": "delete",
  "candidates": "View",
  "gender": "Agender",
  "ip_address": "91.186.214.106"
}, 
{
  "name": "Salima cool",
  "post": " Software Engineer",
  "date": "Jul 12th, 2021",
  "delete": "delete",
  "candidates": "View",
  "gender": "Female",
  "ip_address": "211.8.50.110"
}]




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
};

export default function ManagPostedJobs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  // const { TableData, isFetching } = useSelector((state) => state.product)
  useEffect(() => {
    getAllProductAction()(dispatch);
  }, []);


  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <View />


        </Box>
      </Modal>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>

            <TableRow>
              <TableCell >Names</TableCell>
              <TableCell align='center'>Post Name</TableCell>
              <TableCell align='center'>Date</TableCell>
              <TableCell align='center'>Operation</TableCell>
              <TableCell align='center'>Candidates</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {TableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child': { border: 0 } }}>

                <TableCell >{row.name}</TableCell>
                <TableCell align='center'>{row.post}</TableCell>
                <TableCell align='center'>{row.date}</TableCell>

                <TableCell align='center' color='primary'><Button onClick={handleClose}>{row.delete}</Button></TableCell>
                <TableCell
                  align='center'><Button onClick={handleOpen}>{row.candidates}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>




    </div>
  )
}
