import {Containter} from '@mui/material'
import {Container, AppBar, Toolbar, Typography, Button, Link, Box } from '@mui/material'
import { SignIn } from '@clerk/nextjs';

export default function SignUpPage() {
    return (
    <Container maxWidth="100vw">
        <AppBar position="static" sx = {{ backgroundColor: '#ff85a1', boxShadow: 'none'}}>
            <Toolbar>
                <Typography variant="h6" style={{flexGrow: 1, fontWeight: 'bold'}}> 
                    Flashcard SaaS 
                </Typography>
                <Button color="inherit" sx={{ fontWeight: 'bold'}}> 
                    <Link href="/sign-in" passHref>
                    Login
                    </Link>
                </Button>
                <Button color="inherit" sx={{ fontWeight: 'bold'}}> 
                    <Link href="/sign-up" passHref>
                    Sign Up
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>

        <Box
            display = "flex"
            flexDirection = "column"
            alighnItems = "center"
            justifyContent = "center"
        >
            <Typography variant = "h4">
                Sign In
            </Typography>
            <SignIn/>
        </Box>
    </Container>
    )
}