import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { getAllUsersSwathi,getAllPackagesSwathi,addSubscriptionSwathi,updateSubscriptionSwathi } from 'src/services/authenticate';
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, duration } from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import { useNavigate,useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const validationSchema = yup.object({
  Package: yup.string().required('Package is required'),
  User: yup.string().required('User is required'),
  Type:yup.string().required('Type is required')
})

import "./style.css"


// ----------------------------------------------------------------------

export default function AddSubscribe1() {
  const navigate = useNavigate();
    const location = useLocation();
  const { state } = location;
   console.log("The pass state value is:",state)
  const [users, setUsers] = useState([])
  const [packages, setPackages] = useState([])
  const formik = useFormik({
    initialValues: {
     Package:  state?.package_id ? state?.package_id : '',
     User: state?.user_id ? state?.user_id : '',
     Type: state?.duration ? state?.duration : '',
     Price:  state?.price ? state?.price : '',
     Features:  state?.features ? state?.features : ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("the data is:", values)
        const data = {
        package_id: values.Package,
        user_id: values.User,
        type: values.Type,
  
        }
      if (state.user_id) {
           try {
   
        const res = await updateSubscriptionSwathi(state.id,data)
         console.log('Api response', res)
          toast.success('Package updated successfully', {
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
         navigate('/swatti/subscribe')
        }, 2000) 
 
      } catch (error) {
        toast.error('Error while subscribing package', {
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
      } else {
           try {
   
          const res = await addSubscriptionSwathi(data)
         console.log('Api response', res)
          toast.success('Package subscribe successfully', {
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
         navigate('/swatti/subscribe')
        }, 2000) 
 
      } catch (error) {
        toast.error('Error while subscribing package', {
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
   
    },
  })


   useEffect(() => {
       const fetchUsersData = async () => {
    try {
      const response = await getAllUsersSwathi()
      // console.log('The response get all users', response)
      const listOfData = response[1]

      setUsers(listOfData)
    } catch (error) {
      console.error('Error fetching data data:', error.message)
    }
       }
    const fetchPackageData = async () => {
    try {
      const response = await getAllPackagesSwathi()
      // console.log('The response of api is:', response)
      const listOfData = response.packages
      setPackages(listOfData)
    } catch (error) {
      console.error('Error fetching data:', error.message)
    }
  }
     fetchUsersData()
     fetchPackageData()
   }, [])


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
                  disabled={!!state?.user_id}  // Disable the dropdown if state.user_id is present

                sx={{ '& fieldset': { borderColor: '#8b8787 !important' } }}
              >
                 {users?.map((data, index) => (
                <MenuItem value={data.id}>{data.name}</MenuItem>    
              ))}                 
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
                const record = packages.filter((packag) => packag.id === e.target.value)
                console.log("The selected records is:",record)
                formik.setFieldValue('Price', record[0].price);
                formik.setFieldValue('Features', record[0].features);
              }}
              error={formik.touched.Package && Boolean(formik.errors.Package)}
              sx={{ '& fieldset': { borderColor: '#8b8787 !important' } }}
            >
              {packages?.map((data, index) => (
                <MenuItem value={data.id}>{data.name}</MenuItem>    
              ))}   
              
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
                  inputProps={{
                readOnly: true,
              }}
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
                  inputProps={{
                readOnly: true,
              }}
            />
            </Grid>
            
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel
              id='Type-label'
              error={formik.touched.Type && Boolean(formik.errors.Type)}
            >
              Select Type
            </InputLabel>
            <Select
              labelId='Type-label'
              id='Type'
              name='Type'
              value={formik.values.Type}
              onChange={(e) => {
                formik.setFieldValue('Type', e.target.value);
              }}
              error={formik.touched.Type && Boolean(formik.errors.Type)}
              sx={{ '& fieldset': { borderColor: '#8b8787 !important' } }}
            >
              <MenuItem value='monthly'>Monthly</MenuItem>
              <MenuItem value='yearly'>Yearly</MenuItem>
            </Select>
            {formik.touched.Type && Boolean(formik.errors.Type) && (
              <FormHelperText sx={{ color: '#d32f2f' }}>
                {formik.errors.Type}
              </FormHelperText>
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
