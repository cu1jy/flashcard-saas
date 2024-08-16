"use client";

import React from 'react';
import Image from "next/image";
import getStripe from "../../utils/get-stripe";
import { SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import { Container, AppBar, Toolbar, Typography, Button, Box, Grid, Card, CardContent, CardActions, Switch, FormControlLabel } from '@mui/material';
import Head from 'next/head';
import StarIcon from '@mui/icons-material/Star';
import InputIcon from '@mui/icons-material/Input';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PublicIcon from '@mui/icons-material/Public';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Home() {
  const [isYearly, setIsYearly] = React.useState(false);
  const handlePricingToggle = () => setIsYearly(!isYearly);


  return (
    <Container maxWidth="100vw" sx={{ backgroundColor: '#ffe4e6', minHeight: '100vh', paddingBottom: '2rem', fontFamily: 'Arial, sans-serif'}}>
      <Head>
        <title> Flashcard SaaS </title>
        <meta name = "description" content='Create flashcard from your text' />
      </Head>
      
      <AppBar position = "static" sx={{ backgroundColor: '#ff85a1', boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant = "h6" style={{flexGrow: 1, fontWeight: 'bold'}}> 
            Flashcard SaaS 
          </Typography>
          <SignedOut>
            <Button color = "inherit" href="sign-in" sx={{ fontWeight: 'bold'}}> 
              Login 
            </Button>
            <Button color = "inherit" href="sign-up" sx ={{ fontWeight: 'bold'}}> 
              Sign Up 
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          background: 'linear-gradient(to right, #ff9a9e, #fad0c4)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" gutterBottom>
          The best way to create and manage flashcards
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            mt: 2,
            backgroundColor: '#ff69b4',
            borderRadius: '20px',
            padding: '10px 20px',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.1)', boxShadow: '0px 0px 15px #ff69b4' },
          }}
        >
          Get Started
        </Button>
        <Box
          sx={{
            position: 'absolute',
            bottom: -20,
            width: '100%',
            height: '40px',
            backgroundColor: '#ffe4e6',
            borderRadius: '50%',
            boxShadow: '0px -10px 20px rgba(0,0,0,0.1)',
          }}
        />
      </Box>
      
      {/* Features Section */}
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#ff69b4', fontWeight: 'bold' }}>
          Features
        </Typography>
        <Grid container spacing={4}>
          {[
            { icon: <InputIcon sx={{ fontSize: 50, color: '#ff85a1' }} />, title: "Easy Text Input", description: "Simply input your text and let our software do the rest." },
            { icon: <FlashOnIcon sx={{ fontSize: 50, color: '#ff85a1' }} />, title: "Smart Flashcards", description: "Our AI intelligently breaks down your text into concise flashcards." },
            { icon: <PublicIcon sx={{ fontSize: 50, color: '#ff85a1' }} />, title: "Accessible Anywhere", description: "Access your flashcards from anywhere, anytime." }
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  p: 3,
                  backgroundColor: '#ffe4e6',
                  borderRadius: 2,
                  '&:hover': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', transform: 'translateY(-10px)', transition: '0.3s' },
                  transition: '0.3s'
                }}
              >
                {feature.icon}
                <Typography variant="h6" gutterBottom sx={{ color: '#ff69b4', fontWeight: 'bold' }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ color: '#ff85a1' }}>
                  {feature.description}
                </Typography>
                <Button variant="text" sx={{ mt: 2, color: '#ff69b4', textTransform: 'none', fontWeight: 'bold', '&:hover': { textDecoration: 'underline' } }}>
                  Learn More
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Pricing Section */}
      <Box sx={{ my: 6, textAlign: 'center', background: 'linear-gradient(to right, #ff9a9e, #fad0c4)', py: 6, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
          Pricing
        </Typography>
        <FormControlLabel
          control={<Switch checked={isYearly} onChange={handlePricingToggle} />}
          label={`Show ${isYearly ? 'Monthly' : 'Yearly'} Pricing`}
          sx={{ color: '#ff85a1', fontWeight: 'bold', mb: 4 }}
        />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2, backgroundColor: '#ffe4e6', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: '#ff69b4', fontWeight: 'bold' }}>
                  Basic
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ color: '#ff85a1' }}>
                  {isYearly ? '$50 / year' : '$5 / month'}
                </Typography>
                <Typography sx={{ color: '#ff85a1' }}>
                  Access to basic flashcard features and limited storage.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" sx={{ backgroundColor: '#ff69b4', borderRadius: '20px', padding: '10px 20px', mx: 'auto', my: 2 }}>
                  Choose Basic
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2, backgroundColor: '#ffe4e6', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
              <Box sx={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                backgroundColor: '#ff69b4',
                color: '#fff',
                px: 3,
                py: 1.5,
                borderRadius: '5px',
                fontSize: '12px',
                fontWeight: 'bold',
                animation: 'bounce 2s infinite',
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                  '40%': { transform: 'translateY(-5px)' },
                  '60%': { transform: 'translateY(-3px)' },
                },
              }}>Best Value</Box>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: '#ff69b4', fontWeight: 'bold' }}>
                  Premium
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ color: '#ff85a1' }}>
                  {isYearly ? '$100 / year' : '$10 / month'}
                </Typography>
                <Typography sx={{ color: '#ff85a1' }}>
                  Access to premium features, unlimited storage, and more.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" sx={{ backgroundColor: '#ff69b4', borderRadius: '20px', padding: '10px 20px', mx: 'auto', my: 2 }}>
                  Choose Premium
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Social Media Section */}
      <Box sx={{ backgroundColor: '#ff69b4', color: '#fff', py: 4, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Stay Connected
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Subscribe to our newsletter for updates!
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#ff85a1', borderRadius: '20px', padding: '10px 20px', mb: 4 }}>
          Subscribe
        </Button>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <InstagramIcon sx={{ '&:hover': { color: '#ff85a1' } }} />
          <TwitterIcon sx={{ '&:hover': { color: '#ff85a1' } }} />
          <FacebookIcon sx={{ '&:hover': { color: '#ff85a1' } }} />
        </Box>
        <Typography variant="body2">
          &copy; 2024 Flashcard SaaS. All rights reserved.
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            top: -20,
            width: '100%',
            height: '40px',
            backgroundColor: '#ff69b4',
            borderRadius: '50%',
            boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
          }}
        />
      </Box>
    </Container>  
  )
}
