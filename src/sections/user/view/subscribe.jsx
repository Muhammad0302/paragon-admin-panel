import { useState,useEffect } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';
import { subscribes } from 'src/_mock/user';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import "./style.css"

import TableNoData from '../table-no-data';
import SubscribeTableRow from '../subscribe-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilterSubscribe, getComparator } from '../utils';
import { getAllSubscribePackages } from 'src/services/authenticate';

// ----------------------------------------------------------------------

export default function PackagePage() {
    const [counter, setCounter] = useState(0)
  const [data,setData] = useState([])
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data?.map((n) => n?.user.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilterSubscribe({
    inputData: data,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;
  const handleNewUser = () => {
     navigate('/addSubscribe')
  }

   useEffect(() => {
       const fetchUsersData = async () => {
    try {
      const response = await getAllSubscribePackages()
      console.log('The response get all users', response)
      const listOfData = response.subscription
      setData(listOfData)
    } catch (error) {
      console.error('Error fetching data data:', error.message)
    }
  }
    fetchUsersData()
  }, [counter])

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Subscribe Users</Typography>

        <Button onClick={handleNewUser} variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Subscribe
        </Button>
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={data.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                 headLabel={[
                  { id: 'userName', label: 'User Name' },
                  { id: 'email', label: 'Email' },
                  { id: 'packageName', label: 'Package Name' },
                  { id: 'price', label: 'Price' },
                    { id: 'duration', label: 'Duration' },
                   { id: 'features', label: 'Features' },
                     { id: 'status', label: 'Status' },
                                                                      
    
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <SubscribeTableRow
                      counter={counter}
                      setCounter={setCounter}
                      key={row.id}
                      id={row.id}
                      userName={row.user.name}
                      email={row.user.email}    
                      name={row.package.name}
                      price={row.package.price}
                      duration={row.type}
                      features={row.package.features}
                      user_id={row.user.id}
                      package_id={row.package.id} 
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                      status={row.status}  
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, data.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[ 8,16, 32]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
             <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Bounce} // Specify Bounce as the transition prop value
      />
    </Container>
  );
}
