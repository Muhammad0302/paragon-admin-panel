import { useState } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import { addUser,updateUser } from 'src/services/authenticate';
import { useNavigate,useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
const validationSchema = yup.object({
  Name: yup.string().required('First Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters long')
    .required('Password is required'),
  
})

import "./style.css"


// ----------------------------------------------------------------------

export default function AddUser() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  console.log("The pass states is:",state)
  const formik = useFormik({
    initialValues: {
      Name: state?.name ||'',
      email: state?.email ||'',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        console.log("the data is:", values)
        
      try {
        if (state) {
          const data = {
          id:state.id,
        name: values.Name,
        email: values.email,
        password: values.password,
        }
         const res = await updateUser(data)
         console.log('api response', res)
          toast.success('User account updated successfully', {
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
        setTimeout(() => {
         navigate('/user')
        }, 2000)
       
        } else {
          const data = {
        name: values.Name,
        email: values.email,
        password: values.password,
        }
          const res = await addUser(data)
        console.log('Add user api response', res)
        if (res.message === "The email has already been taken.") {
          toast.error('Email already exist', {
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
 
        } else {
          toast.success('User register successfully', {
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
        setTimeout(() => {
         navigate('/user')
        }, 2000)
        }
        }
     
      
      } catch (error) {
        toast.error('Error while registering user', {
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
    },
  })
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
      </Stack>

  
   <div className='mt-[3.5rem]'>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          spacing={3}
          sx={{ marginTop: '5px !important', paddingLeft: '6rem', paddingRight: '6rem' }}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              id='Name'
              name='Name'
              label='Name'
              variant='outlined'
              fullWidth
              value={formik.values.Name}
              onChange={formik.handleChange}
              error={formik.touched.Name && Boolean(formik.errors.Name)}
              helperText={formik.touched.Name && formik.errors.Name}
              sx={{ '& fieldset': { borderColor: '#8b8787 !important' } }}
              InputLabelProps={{ focused: false }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='email'
              name='email'
              label='Email'
              variant='outlined'
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ '& fieldset': { borderColor: '#8b8787 !important' } }}
              InputLabelProps={{ focused: false }}
            />
            </Grid>
               <Grid item xs={12} sm={6}>
            <TextField
              id='password'
              name='password'
              label='Password'
              variant='outlined'
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{ '& fieldset': { borderColor: '#8b8787 !important' } }}
              InputLabelProps={{ focused: false }}
            />
          </Grid>


       

          <Grid item xs={12} container justifyContent='flex-end'>
            <Button
              type='submit'
              variant='contained'
              sx={{
                marginLeft: 'auto',
                background: 'rgb(24, 119, 242)',
                color: 'black',
                '&:hover': { background: 'rgb(9, 67, 143)' },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
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
    </div>
 
    </Container>
  );
}
