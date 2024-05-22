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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const validationSchema = yup.object({
  Price: yup.string().required('First Price is required'),
  Features: yup.string().required('Email is required'),
  startDate: yup.string(),
   endDate: yup.string(),
   User:yup.string()
  
})

import "./style.css"


// ----------------------------------------------------------------------

export default function AddSubscribe() {
     const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
     Price: '',
     Package: '',
     User:'',
     Features: '',
     startDate: '',
     endDate:''
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
            <FormControl fullWidth>
              <InputLabel
                id='User-label'
                error={formik.touched.User && Boolean(formik.errors.User)}
              >
               Select User
              </InputLabel>
              <Select
                labelId='User'
                id='User'
                name='User'
                value={formik.values.User}
                onChange={(e) => {
                  formik.setFieldValue('User', e.target.value)
                }}
                error={formik.touched.User && Boolean(formik.errors.User)}
                sx={{ '& fieldset': { borderColor: '#8b8787 !important' } }}
              >
                <MenuItem value='Maxmillion'>Maxmillion</MenuItem>
               <MenuItem value='Alice'>Alice</MenuItem>
                <MenuItem value='Bob'>Bob</MenuItem>
               <MenuItem value='Charlie'>Charlie</MenuItem>
               <MenuItem value='David'>David</MenuItem>
               <MenuItem value='Eve'>Eve</MenuItem>
               <MenuItem value='Frank'>Frank</MenuItem>
               <MenuItem value='Grace'>Grace</MenuItem>
                                  <MenuItem value='Heidi'>Heidi</MenuItem>
                                  
                              </Select>
                                {formik.touched.User && Boolean(formik.errors.User) && (
                <FormHelperText sx={{ color: '#d32f2f' }}>{formik.errors.User}</FormHelperText>
              )}
            </FormControl>
        </Grid>
                      
           <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel
              id='Package-label'
              error={formik.touched.Package && Boolean(formik.errors.Package)}
            >
              Select Package
            </InputLabel>
            <Select
              labelId='Package-label'
              id='Package'
              name='Package'
              value={formik.values.Package}
              onChange={(e) => {
                formik.setFieldValue('Package', e.target.value);
              }}
              error={formik.touched.Package && Boolean(formik.errors.Package)}
              sx={{ '& fieldset': { borderColor: '#8b8787 !important' } }}
            >
              <MenuItem value='Basic'>Basic</MenuItem>
              <MenuItem value='Silver'>Silver</MenuItem>
              <MenuItem value='Gold'>Gold</MenuItem>
            </Select>
            {formik.touched.Package && Boolean(formik.errors.Package) && (
              <FormHelperText sx={{ color: '#d32f2f' }}>
                {formik.errors.Package}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>

                      
          <Grid item xs={12} sm={6}>
            <TextField
              id='Price'
              name='Price'
              label='Price'
              variant='outlined'
              fullWidth
              value={formik.values.Price}
              onChange={formik.handleChange}
              error={formik.touched.Price && Boolean(formik.errors.Price)}
              helperText={formik.touched.Price && formik.errors.Price}
              sx={{ '& fieldset': { borderColor: '#8b8787 !important' } }}
              InputLabelProps={{ focused: false }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='Features'
              name='Features'
              label='Features'
              variant='outlined'
              fullWidth
              value={formik.values.Features}
              onChange={formik.handleChange}
              error={formik.touched.Features && Boolean(formik.errors.Features)}
              helperText={formik.touched.Features && formik.errors.Features}
              sx={{ '& fieldset': { borderColor: '#8b8787 !important' } }}
              InputLabelProps={{ focused: false }}
            />
          </Grid>
        <Grid item xs={12} sm={3}>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
           <DemoContainer components={['DatePicker']}>
          <DatePicker label="Start Date" />
         </DemoContainer>
        </LocalizationProvider>
        </Grid>
       <Grid item xs={12} sm={3}>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
           <DemoContainer components={['DatePicker']}>
          <DatePicker label="End Date" />
         </DemoContainer>
        </LocalizationProvider>
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
