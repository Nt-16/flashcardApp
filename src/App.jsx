import { useState } from 'react';
import Flashcard from './Flashcard';
import { Button, Container, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const flashcards = [
  { 
    question: "Which animal has the longest lifespan?", 
    answer: "The Greenland shark, which can live over 400 years.",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTK5V-sldi6xKZTQ1qSTVB513E2fS4aW7Ce6uWjy-GQ3ks_Te-p"
  },
  { 
    question: "Which bird can fly backward?", 
    answer: "The hummingbird is the only bird that can fly backward.", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Rufous_Hummingbird%2C_male_01.jpg/1200px-Rufous_Hummingbird%2C_male_01.jpg"
  },
  { 
    question: "What is the largest mammal on Earth?", 
    answer: "The blue whale, which can grow up to 100 feet long.", 
    image: "https://www.antarctica.gov.au/site/assets/files/45670/ia40342.1200x630.jpg"
  },
  { 
    question: "Which animal is known for having the best memory?", 
    answer: "Elephants are known for their incredible memory.", 
    image: "https://africanconservation.org/wp-content/uploads/2023/01/elephants-carbon.jpeg"
  },
  { 
    question: "Which land animal is the fastest runner?", 
    answer: "The cheetah, which can run up to 75 mph.", 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/1200px-Male_cheetah_facing_left_in_South_Africa.jpg'
  },
  { 
    question: "Which animal sleeps the most?", 
    answer: "Koalas sleep up to 22 hours a day.", 
    image: "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg"
  },
  { 
    question: "Which is the only mammal capable of true flight?", 
    answer: "The bat is the only mammal that can truly fly.", 
    image: "https://agrilifetoday.tamu.edu/wp-content/uploads/2020/10/AdobeStock_182505240.jpeg"
  },
  { 
    question: "What is the largest species of shark?", 
    answer: "The whale shark, which can grow up to 40 feet long.", 
    image: "https://i.natgeofe.com/k/15d5680f-a0b6-4a0b-b369-f258493a7362/OG_Whale-Shark_KIDS_0622_16x9.jpg"
  },
  { 
    question: "Which animal has the highest blood pressure?", 
    answer: "The giraffe has the highest blood pressure due to its long neck.", 
    image: "https://www.worldatlas.com/upload/cf/93/4b/shutterstock-1385689649.jpg"
  },
  { 
    question: "What is the most venomous snake in the world?", 
    answer: "The inland taipan, also known as the 'fierce snake'.", 
    image: "https://www.billabongsanctuary.com.au/wp-content/uploads/2023/07/Inland-Taipan-1200x800.jpg"
  },
  { 
    question: "Which animal has the thickest fur?", 
    answer: "The sea otter, with up to one million hairs per square inch.", 
    image: "https://environmentamerica.org/wp-content/uploads/2023/02/EAC_Otters_savethem-e1695676447396.jpg"
  },
  { 
    question: "Which animal has the strongest bite force?", 
    answer: "The saltwater crocodile, with a bite force of 3,700 PSI.", 
    image: "https://cdn.shopify.com/s/files/1/0996/1022/files/shutterstock_2219524909.jpg?v=1695683151"
  },
  { 
    question: "Which bird has the largest wingspan?", 
    answer: "The wandering albatross, with a wingspan of up to 12 feet.", 
    image: "https://www.quarkexpeditions.com/sites/default/files/blog-images/AdobeStock_105095292.jpeg"
  }
];

const App = () => {
  const [index, setIndex] = useState(0);

  const randomizeFlashcard = () => {
    setIndex(Math.floor(Math.random() * flashcards.length));
  };

  return (
    <Box display='flex' sx={{
      backgroundImage: 'url("https://img.freepik.com/free-vector/copy-space-bokeh-spring-lights-background_52683-55649.jpg")', // Replace with your image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Full viewport height
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem', // Optional: padding for spacing
    }}
  >
      <Container sx={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Wild Wonders: Animal Trivia
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ fontWeight: '300', color: '#333' }}>
         Test your animal knowledge with these fun and educational trivia flashcards! Click through to learn more about the incredible creatures of the animal kingdom!
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontWeight: '500', marginBottom: '1.5rem', color: '#555' }}>
          Total Cards: {flashcards.length}
        </Typography>
        <Flashcard flashcard={flashcards[index]} />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={randomizeFlashcard} 
          sx={{
            marginTop: '2rem',
            borderRadius: '2rem',
            backgroundColor: '#1976d2',
            padding: '0.5rem 1.5rem',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            '&:hover': {
              backgroundColor: '#1565c0', // Darker blue on hover
              transform: 'scale(1.05)', // Slightly larger on hover
            },
            '&:active': {
              transform: 'scale(0.95)', // Slightly smaller when active
            },
          }}
        >
          Next card
          <ArrowForwardIcon/>
        </Button>
        
      </Container>
    </Box>
  );
};

export default App;
