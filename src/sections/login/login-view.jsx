import React, { useState } from 'react';
import { Box, Stack, TextField, Typography, Divider, IconButton, InputAdornment } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Iconify from 'src/components/iconify';
import { useRouter } from 'src/routes/hooks';
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { login } from '../../services/authenticate';

export default function LoginView() {
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
    <Box>
      <Stack spacing={3} sx={{ p: 5, maxWidth: 420, mx: 'auto',    height: "100vh",
    display: "flex",
    justifyContent: "center" }}>
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
