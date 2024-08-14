import { useUser } from "@clerk/nextjs";
import { CardActionArea, CardContent, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function Flashcard() {
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState({})

    const searchParams = useSearchParams()
    const search = searchParams.get('id')

    const handleCardClick = id => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    useEffect(() => {
        async function getFlashcard() {
            if (!search || !user ) return

            const colRef = collection(doc(collection(db, 'users'), user.id), search)
            const docs = await getDocs(colRef)
            const flashcards = []
            docs.forEach((doc) => {
                flashcards.push({ id: doc.id, ...doc.data() })
            })
            setFlashcards(flashcards)
        }
        getFlashcard()
    }, [search, user])
}

return (
    <Container maxWidth="md">
        <Grid containter spacing={3} sx={{ mt: 4}}>
            {flashcards.map((flashcard) => (
                <Grid item xs={12} sm={6} md={4} key={flashcard.id}>
                    <Card>
                        <CardActionArea onClick={() => handleCardClick(flashcard.id)}>
                            <CardContent>
                                <Box sx={{ /* Styling for flip animation */ }}>
                                    <div>
                                        <div>
                                            <Typography variant="h5" component={"div"}>
                                                {flashcard.front}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="h5" component="div">
                                                {flashcard.back}
                                            </Typography>
                                        </div>
                                    </div>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
)