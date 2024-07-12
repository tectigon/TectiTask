import React, { useState } from 'react';
import { Button, TextField, Link, Typography, Checkbox, FormControlLabel } from '@mui/material';
import './signup.css';

function SignUp() {
    const [formType, setFormType] = useState('signIn');

    return (
        <>
            <div className="signup-header">
                <div className="content">
                <div className="logo">
                    <h3>Tecti<span>Task</span></h3>
                </div>
                </div>
            </div>
            <div className="signupContainer">

                <div className="signup-item">

                    <div className="signupImg">
                        <img src="./src/assets/signupImg3.png" alt="" width={460} />
                    </div>
                    <div className="signup-content">
                        <div className="">
                            {formType === 'signIn' && (
                                <>
                                    <Typography variant="h4" component="h4" gutterBottom>
                                        Sign In
                                    </Typography>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur exercitationem placeat?</p>
                                    <TextField label="Email" variant="outlined" fullWidth className="my-2" />
                                    <TextField label="Password" type="password" variant="outlined" fullWidth className="my-2" />
                                    <FormControlLabel
                                        control={<Checkbox name="savePassword" color="primary" />}
                                        label="Save Password"
                                        className="my-2"
                                    />
                                    <Link href="#" variant="body2" align="right" className="text-blue-500" onClick={() => setFormType('forgotPassword')}>
                                        Forgot password?
                                    </Link>
                                    <Button variant="contained" color="primary" className="my-2" fullWidth>
                                        Sign In
                                    </Button>
                                    <Button variant="outlined" color="primary" className="my-2" fullWidth>
                                        Login with Google
                                    </Button>
                                    <Typography variant="body2" align="center">
                                        Don't have an account? <Link href="#" className="text-blue-500" onClick={() => setFormType('signUp')}>Sign Up</Link>
                                    </Typography>
                                </>
                            )}
                            {formType === 'signUp' && (
                                <>
                                    <Typography variant="h4" component="h4" gutterBottom>
                                        Sign Up
                                    </Typography>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <TextField label="Name" variant="outlined" fullWidth className="my-2" />
                                    <TextField label="Email" variant="outlined" fullWidth className="my-2" />
                                    <TextField label="Password" type="password" variant="outlined" fullWidth className="my-2" />
                                    <TextField label="Confirm Password" type="password" variant="outlined" fullWidth className="my-2" />
                                    <Button variant="contained" color="primary" className="my-2" fullWidth>
                                        Sign Up
                                    </Button>
                                    <Button variant="outlined" color="primary" className="my-2" fullWidth>
                                        Sign Up with Google
                                    </Button>
                                    <Typography variant="body2" align="center">
                                        Already have an account? <Link href="#" className="text-blue-500" onClick={() => setFormType('signIn')}>Sign In</Link>
                                    </Typography>
                                </>
                            )}
                            {formType === 'forgotPassword' && (
                                <>
                                    <Typography variant="h5" component="h5" gutterBottom>
                                        Forgot Password
                                    </Typography>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta reprehenderit enim.</p>
                                    <TextField label="Email" variant="outlined" fullWidth className="my-2" />
                                    <Button variant="contained" color="primary" className="my-2" fullWidth>
                                        Reset Password
                                    </Button>
                                    <Typography variant="body2" align="center">
                                        Remembered? <Link href="#" className="text-blue-500" onClick={() => setFormType('signIn')}>Sign In</Link>
                                    </Typography>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
