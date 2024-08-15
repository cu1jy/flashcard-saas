import { useUser } from "@clerk/nextjs";
import { CardActionArea, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Flashcard() {
    const {isLoaded, isSignedIn, user } = useUser()
    const [flashcards, setFlashcards] = useState([])
    const router = useRouter()
    
    const handleCardClick = (id) => {
        router.push(`/flashcard?id=${id}`)
    }

    useEffect(() => {
        async function getFlashcards() {
            if (!user) return 
            const docRef = doc(collection(db, 'users'), user.id)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || []
                setFlashcards(collections)
            } else {
                await setDoc(docRef, { flashcards: [] })
            }
        }
        getFlashcards()
    }, [user])
}

const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers : { origin: 'http://localhost:3000'},
    })
    const checkoutSessionJson = await checkoutSession.json()

    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
        sessionId: checkoutSessionJson.id,
    })

    if (error) {
        console.warn(error.message)
    }
}

return (
    <Container maxWidth = "md">
        <Grid container spacing = {3} sx={{mt : 4}}>
            {flashcards.map((flashcards, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardActionArea onClick={() => handleCardClick(flashcard.name)}>
                            <CardContent>
                                <Typography variant ="h5" component="div">
                                    {flashcard.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
)