import { useState } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
const validationSchema = yup.object({
  Name: yup.string().required('First Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  role: yup.string().required('Role is required'),
  
})

import "./style.css"


// ----------------------------------------------------------------------

export default function AddUser() {
     const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Name: '',
      email: '',
      role: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        console.log("the data is:", values)
         navigate('/user')
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
            <FormControl fullWidth>
              <InputLabel
                id='role-label'
                error={formik.touched.role && Boolean(formik.errors.role)}
              >
                Role
              </InputLabel>
              <Select
                labelId='role'
                id='role'
                name='role'
                value={formik.values.role}
                onChange={(e) => {
                  formik.setFieldValue('role', e.target.value)
                }}
                error={formik.touched.role && Boolean(formik.errors.role)}
                sx={{ '& fieldset': { borderColor: '#8b8787 !important' } }}
              >
                <MenuItem value='Admin'>Admin</MenuItem>
                <MenuItem value='Supervisor'>Supervisor</MenuItem>
                              </Select>
                                {formik.touched.role && Boolean(formik.errors.role) && (
                <FormHelperText sx={{ color: '#d32f2f' }}>{formik.errors.role}</FormHelperText>
              )}
            </FormControl>
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
