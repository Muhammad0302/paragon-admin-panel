import { useState } from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import { useNavigate,useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { deleteUser,changeStatus } from 'src/services/authenticate';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  name,
  avatarUrl,
  email,
  role,
  status,
  handleClick,
  id,
  counter,
  setCounter
}) {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };
  const handleDelete = async (id) => {
    
    setOpen(null);
    console.log("The user id is:",id)
     try {
      const res = await deleteUser(id)
      console.log('Delete api response', res)
      toast.success('Account Deleted Successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      })
      setCounter(counter + 1)
    } catch (error) {
      toast.error('Error while deleting user', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      })
    }
  }
    const handleStatus = async(id,status) => {
    setOpen(null);
      console.log("The user id and status is:", id,status)
      let data;
      if (status === 'active') {
      data = {
         "status": 1
      }     
      } else {
          data = {
         "status": 0
      } 
      }
     try {
      const res = await changeStatus(id,data)
      console.log('Status api response', res)
      toast.success('Status updated Successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      })
      setCounter(counter + 1)
    } catch (error) {
      toast.error('Error while deleting user', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      })
    }
    }
  
  
  const handleEdit = () => {
    
    navigate('/addUser',
      {
      state: {
        id,
        name,
        email,
      },
    }
    )
    setOpen(null);
  };
  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={name} src={avatarUrl} />
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{email}</TableCell>

        <TableCell>{role}</TableCell>


        <TableCell>
          <Label color={(status === 'block' && 'error') || 'success'}>{status}</Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        {/* <MenuItem onClick={handleEdit}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem> */}

        <MenuItem onClick={()=>handleDelete(id)} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
             <MenuItem onClick={()=>handleStatus(id,status ==='block' ? 'active' : 'block')} sx={{ color: 'warning.main' }}>
          <Iconify icon="fluent:block-24-regular" sx={{ mr: 2 }} />
         {status ==='block' ? 'Active' : 'Block'} 
        </MenuItem>
        {/* Unblock */}
      </Popover>
  
    </>
  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  name: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
};
