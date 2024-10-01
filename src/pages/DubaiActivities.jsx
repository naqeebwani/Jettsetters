import React, { useMemo, useState } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { dubaiActivitiesData } from '../data'
import WrapperLayout from '../components/Layouts/WrapperLayout';

const columns = [
    {
        id: 1,
        label: "Sr. No",
        minWidth: "100",
        align: 'left',
    },
    {
        id: 2,
        label: "Description",
        minWidth: "170",
        align: 'center',
    },
    {
        id: 3,
        label: "Pax",
        minWidth: "170",
        align: 'left',
    },
    {
        id: 4,
        label: "Price",
        minWidth: "170",
        align: 'left',
    },
    {
        id: 5,
        label: "Remarks",
        minWidth: "170",
        align: 'center',
    }
]

const DubaiActivities = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const dubaiData = useMemo(() => dubaiActivitiesData);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className='bg-[#e9e9e962] w-full md:p-4 md:pb-2'>
            <h1 className='text-center 2xl:text-6xl md:text-5xl text-3xl md:p-4 p-3 mt-5 md:mb-3 font-semibold'>Activities with Prices to Plan Your Dubai Trip</h1>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: '90vh' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow >
                                {columns.map((col) => (
                                    <TableCell
                                        key={col.id}
                                        align={col.align}
                                        style={{ minWidth: col.minWidth }}
                                        sx={{ fontSize: "18px", fontWeight: 600, backgroundColor: "#e9e9e9" }}
                                    >
                                        {col.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dubaiActivitiesData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((rowData) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={rowData.id}>
                                            <TableCell sx={{ fontWeight: 600 }}>{rowData.id}</TableCell>
                                            <TableCell sx={{ fontWeight: 500 }}>{rowData.description}</TableCell>
                                            <TableCell sx={{ fontWeight: 500 }}>{rowData.pax}</TableCell>
                                            <TableCell sx={{ fontWeight: 600, textTransform : "uppercase"}}>
                                                {
                                                    typeof (rowData.price) == "string" ? rowData.price.split('-').length  === 2 ? "$"+rowData.price.split('-')[0] + " to $" + rowData.price.split('-')[1] : rowData.price : "$"+rowData.price
                                                }
                                                {/* rowData.price.split('-')[0] + " to $" + rowData.price.split('-')[1] */}
                                            </TableCell>
                                            <TableCell>{rowData.remarks}</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50, 75, 106]}
                    component="div"
                    count={dubaiActivitiesData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}

export default WrapperLayout('Jetsetters | Dubai Activities')(DubaiActivities)