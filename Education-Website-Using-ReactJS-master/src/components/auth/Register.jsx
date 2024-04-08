import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';
import './Register.css';
import {
    Google,
    Facebook,
    GitHub,
} from '@mui/icons-material';
import "../common/header/header.css"

function handleSubmit() {}

function Register() {
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
    });
    const getData = (e) => {
        const { value, name } = e.target;
        setFormValues(() => {
            return {
                ...formValues,
                [name]: value,
            };
        });
    };
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50)
        })
    }, [])

    return (
        <>
            <header className={scroll ? "header-scroll" : ""}>
                <nav className='flexSB'>
                    <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                        <div className='logo'>
                            <Link href="/">
                                <h1>CeRRoute</h1>
                            </Link>
                        </div>
                        <li>
                            <select name="courses" id="courses">
                                <option value="">Categories</option>
                                <option value="course1">Course 1</option>
                                <option value="course2">Course 2</option>
                                <option value="course3">Course 3</option>
                            </select>
                        </li>
                        <li>
                            <input type="search" placeholder="Search..."/>
                        </li>
                        <li>
                            <a href='http://localhost:3000/login' rel='noopener noreferrer'>Sign In</a>
                        </li>
                        <li>
                            <a href='http://localhost:3000/register' rel='noopener noreferrer'>Sign Up</a>
                        </li>
                        <li>
                            <i className="fa fa-shopping-cart"></i>
                        </li>
                    </ul>
                    <div className='start'>
                        <select name="languages" id="languages">
                        <option value="en">EU</option>
                            <option value="tr">TR</option>
                            {/* Diğer dilleri buraya ekleyin */}
                        </select>
                    </div>
                    <button className='toggle' onClick={() => setClick(!click)}>
                        {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </header>
        <Box className="login-container">
            <Container component="main" maxWidth="xs">
                <Box className="login-layer">
                    <Typography component="h2" variant="h5">
                        Sign Up
                    </Typography>
                    <Box className="input-group">
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            type="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={getData}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            type="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={getData}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={getData}
                        />
                    </Box>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>

                    <Grid className="footer">
                        <Typography component="h5">
                            Already have an account? <Link href="/login">Sign In</Link>
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        className="social-icons"
                    >
                        <Google onClick={() => alert('Google sign in')} />
                        <Facebook onClick={() => alert('Facebook sign in')} />
                        <GitHub onClick={() => alert('Twitter sign in')} />
                    </Grid>
                </Box>
            </Container>
        </Box>
        </>
    );
}

export default Register;
