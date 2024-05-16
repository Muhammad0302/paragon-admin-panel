import React, { useState } from 'react';
import { Box, Stack, TextField, Typography, Divider, IconButton, InputAdornment } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Iconify from 'src/components/iconify';
import { useRouter } from 'src/routes/hooks';
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { login } from '../../services/authenticate';
import { bgGradient } from 'src/theme/css';
import { alpha, useTheme } from '@mui/material/styles';

export default function LoginView() {
   const theme = useTheme();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const userData = await login(email, password);
      console.log(userData); // Do something with the response data, like storing it in context or local storage
      if (userData.token) {
        localStorage.setItem('userData', JSON.stringify(userData.user));
        localStorage.setItem('token', JSON.stringify(userData.token));
        toast.success('Login successfully', {
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
        window.location.reload();
          router.push('/')
        }, 2000)
      }
     

    } catch (error) {
      console.error('Login error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
    }}>
      <div style={{    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"}}>
      <Stack spacing={3} sx={{ p: 5, maxWidth: 420, mx: 'auto',backgroundColor: "white" }}>
        <Typography variant="h4" textAlign="center">Sign in to Paragon Admin Panel</Typography>
        <Divider />
        <TextField
          name="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton
          fullWidth
          size="large"
          variant="contained"
          color="inherit"
          onClick={handleLogin}
          loading={loading}
        >
          Login
        </LoadingButton>
        </Stack>
        </div>

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
    </Box>
  );
}




// import { useState } from 'react';

// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import LoadingButton from '@mui/lab/LoadingButton';
// import { alpha, useTheme } from '@mui/material/styles';
// import InputAdornment from '@mui/material/InputAdornment';

// import { useRouter } from 'src/routes/hooks';

// import { bgGradient } from 'src/theme/css';

// import Logo from 'src/components/logo';
// import Iconify from 'src/components/iconify';

// // ----------------------------------------------------------------------

// export default function LoginView() {
//   const theme = useTheme();

//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);

//   const handleClick = () => {
//     router.push('/');
//   };

//   const renderForm = (
//     <>
//       <Stack spacing={3}>
//         <TextField name="email" label="Email address" />

//         <TextField
//           name="password"
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Stack>

//       <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
//         <Link variant="subtitle2" underline="hover">
//           Forgot password?
//         </Link>
//       </Stack>

//       <LoadingButton
//         fullWidth
//         size="large"
//         type="submit"
//         variant="contained"
//         color="inherit"
//         onClick={handleClick}
//       >
//         Login
//       </LoadingButton>
//     </>
//   );

//   return (
//     <Box
//       sx={{
//         ...bgGradient({
//           color: alpha(theme.palette.background.default, 0.9),
//           imgUrl: '/assets/background/overlay_4.jpg',
//         }),
//         height: 1,
//       }}
//     >
//       <Logo
//         sx={{
//           position: 'fixed',
//           top: { xs: 16, md: 24 },
//           left: { xs: 16, md: 24 },
//         }}
//       />

//       <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
//         <Card
//           sx={{
//             p: 5,
//             width: 1,
//             maxWidth: 420,
//           }}
//         >
//           <Typography variant="h4" style={{textAlign: "center"}}>Sign in to Paragon Admin Panel</Typography>


//           <Divider sx={{ my: 3 }}>
        
//           </Divider>

//           {renderForm}
//         </Card>
//       </Stack>
//     </Box>
//   );
// }
