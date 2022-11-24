import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead, } from '@mui/material';
import TableData from '../components/Assets/TableData.json';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Navbar from '../components/Navbar';
import ModalContent from './ModalContent';
import ModalCandidates from './ModalCandidates';

const style = {
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #51B9A7',
    overflow: "scroll",
    // boxShadow: 24,
    p: 4,
};

export default function TableItem() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [opn, setOpn] = React.useState(false);
    const handleOpn = () => setOpn(true);
    const handleClse = () => setOpn(false);


    return (
        <>

            <div>
                <Navbar />
            </div>

            <div className='flex divide-x-2'>

                <div className='w-[1000px]'>
                    <TableContainer component={Paper} sx={{ maxHeight: '600px' }} >
                        <Table aria-label='simple table' stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell className=' text-left ' style={{ fontWeight: 900 }}>Job Title</TableCell>
                                    <TableCell align='center' style={{ fontWeight: 900 }}>Date</TableCell>
                                    <TableCell align='center' style={{ fontWeight: 900 }}>Job Details</TableCell>
                                    <TableCell align='center' style={{ fontWeight: 900 }}>Candidates</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {TableData.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child': { border: 0 } }}>

                                        <TableCell>{row.job_title}</TableCell>
                                        <TableCell align='center'>{row.date}</TableCell>

                                        <TableCell align='center' bg-blue-300>
                                            <Button sx={{ bgcolor: 'rgba(81, 185, 167, 0.29)' }} onClick={handleOpen}>{row.job_detail}</Button>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Button sx={{ bgcolor: 'rgba(57, 166, 234, 0.3)' }} onClick={handleOpn}>{row.candidates}</Button>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
            <div className='pt-24 '>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <ModalContent onClose={handleClose}/>
                    </Box>
                </Modal>

                <Modal
                    open={opn}
                    onClose={handleClse}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <ModalCandidates />
                    </Box>
                </Modal>



            </div>

        </>

    )
}