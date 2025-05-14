

// import React from 'react';
// import {
//     Box,
//     Typography,
//     TextField,
//     Button,
//     Divider,
//     IconButton,
//     InputAdornment,
//     Paper
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import EmailIcon from '@mui/icons-material/Email';

// const Login = () => {
//     return (
//         <Paper
//             elevation={3}
//             sx={{
//                 maxWidth: 400,
//                 width: '100%',
//                 p: 3,
//                 position: 'relative',
//                 borderRadius: 2
//             }}
//         >
//             {/* Close Button */}
//             <IconButton
//                 sx={{ position: 'absolute', top: 8, right: 8 }}
//                 aria-label="close"
//             >
//                 <CloseIcon />
//             </IconButton>

//             {/* Title */}
//             <Typography variant="h6" fontWeight="bold" mb={3}>
//                 Login
//             </Typography>

//             {/* Phone Input */}
//             <TextField
//                 fullWidth
//                 placeholder="Phone"
//                 InputProps={{
//                     startAdornment: (
//                         <InputAdornment position="start">
//                             <span>🇮🇳</span>
//                             <Typography variant="body2" sx={{ ml: 1, mr: 1 }}>
//                                 +91
//                             </Typography>
//                             <span>▼</span>
//                         </InputAdornment>
//                     ),
//                 }}
//                 sx={{ mb: 2 }}
//             />

//             {/* Send OTP Button */}
//             <Button
//                 fullWidth
//                 variant="contained"
//                 sx={{
//                     backgroundColor: '#f06292',
//                     py: 1.5,
//                     mb: 2,
//                     '&:hover': { backgroundColor: '#ec407a' }
//                 }}
//             >
//                 SEND ONE TIME PASSWORD
//             </Button>

//             {/* Divider */}
//             <Box display="flex" alignItems="center" mb={2}>
//                 <Divider sx={{ flex: 1 }} />
//                 <Typography variant="body2" color="textSecondary" mx={2}>
//                     or
//                 </Typography>
//                 <Divider sx={{ flex: 1 }} />
//             </Box>

//             {/* Continue with Email */}
//             <Button
//                 fullWidth
//                 variant="outlined"
//                 startIcon={<EmailIcon />}
//                 sx={{ py: 1.5, mb: 2 }}
//             >
//                 Continue with Email
//             </Button>

//             {/* Sign in with Google */}
//             <Button
//                 fullWidth
//                 variant="outlined"
//                 startIcon={
//                     <img
//                         src="https://www.google.com/favicon.ico"
//                         alt="Google"
//                         style={{ width: 20, height: 20 }}
//                     />
//                 }
//                 sx={{ py: 1.5, mb: 2 }}
//             >
//                 Sign in with Google
//             </Button>

//             {/* Create Account Link */}
//             <Typography variant="body2" align="center" color="primary">
//                 New to Zomato?{' '}
//                 <a href="#" style={{ color: '#f06292', textDecoration: 'underline' }}>
//                     Create account
//                 </a>
//             </Typography>
//         </Paper>
//     );
// };

// export default Login;

import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Divider,
    IconButton,
    InputAdornment,
    Paper
} from '../../node_modules/@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';

const Login = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    maxWidth: 500,
                    width: '100%',
                    p: 4,
                    position: 'relative',
                    borderRadius: 2
                }}
            >

                <IconButton
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>


                <Typography variant="h4" fontWeight="bold" mb={3}>
                    Login
                </Typography>


                <TextField
                    fullWidth
                    placeholder="Phone"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <span>🇮🇳</span>
                                <Typography variant="body4" sx={{ ml: 1, mr: 1 }}>
                                    +91
                                </Typography>
                                <span>▼</span>
                            </InputAdornment>
                        ),
                    }}
                    sx={{ mb: 2 }}
                />

                <Button
                    fullWidth
                    variant="contained"
                    // variant="h1"
                    sx={{
                        backgroundColor: '#f06292',
                        py: 1.5,
                        mb: 2,
                        '&:hover': { backgroundColor: '#ec407a' }
                    }}
                >
                    SEND ONE TIME PASSWORD
                </Button>


                <Box display="flex" alignItems="center" mb={2}>
                    <Divider sx={{ flex: 1 }} />
                    <Typography variant="body2" color="textSecondary" mx={2}>
                        or
                    </Typography>
                    <Divider sx={{ flex: 1 }} />
                </Box>


                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<EmailIcon />}
                    sx={{ py: 1.5, mb: 2 }}
                >
                    Continue with Email
                </Button>

                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={
                        <img
                            src="https://www.google.com/favicon.ico"
                            alt="Google"
                            style={{ width: 20, height: 20 }}
                        />
                    }
                    sx={{ py: 1.5, mb: 2 }}
                >
                    Sign in with Google
                </Button>


                <Typography variant="body্র

2" align="center" color="primary">
                    New to Zomato?{' '}
                    <a href="#" style={{ color: '#f06292', textDecoration: 'underline' }}>
                        Create account
                    </a>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Login;