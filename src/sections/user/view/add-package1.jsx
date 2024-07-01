import { useState } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { updatePackage,addPackage } from 'src/services/authenticate';
import FormHelperText from '@mui/material/FormHelperText'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import { useNavigate,useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
const validationSchema = yup.object({
  Name: yup.string().required('First Name is required'),
  price: yup.string().required('Price is required'),
  features: yup.string().required('Features is required'),
  
})

import "./style.css"


// ----------------------------------------------------------------------

export default function AddPackage1() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  console.log("The pass state value is:",state)
    const formik = useFormik({
    initialValues: {
      Name: state?.name ||'',
      price: state?.price ||'',
      features: state?.features ||'',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        console.log("the data is:", values)
             
      try {
        if (state) {
          const data = {
            name: values.Name,
            price: values.price,
            features: values.features,
        }
         const res = await updatePackage(state.id,data)
         console.log('api response', res)
          toast.success('Packages updated successfully', {
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
         navigate('/package')
        }, 2000)
       
        } else {
          const data = {
            name: values.Name,
            price: values.price,
            features: values.features,
        }
          const res = await addPackage(data)
          console.log('api response', res)
          toast.success('Package added successfully', {
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
         navigate('/package')
        }, 2000)
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
              id='price'
              name='price'
              label='Price'
              variant='outlined'
              fullWidth
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              sx={{ '& fieldset': { borderColor: '#8b8787 !important' } }}
              InputLabelProps={{ focused: false }}
            />
        </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='features'
              name='features'
              label='Features'
              variant='outlined'
              fullWidth
              value={formik.values.features}
              onChange={formik.handleChange}
              error={formik.touched.features && Boolean(formik.errors.features)}
              helperText={formik.touched.features && formik.errors.features}
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
