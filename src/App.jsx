// import { useState } from 'react';
// import Flashcard from './flashcard.jsx';
// import { Button, Container, Typography, Box, TextField } from '@mui/material';
// import {ArrowForwardIcon, ArrowBackIcon } from '@mui/icons-material/ArrowForward';


import { useState } from 'react';
import Flashcard from './flashcard.jsx'; // Assuming you have a Flashcard component
import { Button, Container, Typography, Box, TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShuffleIcon from '@mui/icons-material/Shuffle';

const init_flashcards = [
  { 
    question: "Which animal has the longest lifespan?", 
    answer: "Greenland shark",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTK5V-sldi6xKZTQ1qSTVB513E2fS4aW7Ce6uWjy-GQ3ks_Te-p"
  },
  { 
    question: "Which bird can fly backward?", 
    answer: " hummingbird ", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Rufous_Hummingbird%2C_male_01.jpg/1200px-Rufous_Hummingbird%2C_male_01.jpg"
  },
  { 
    question: "What is the largest mammal on Earth?", 
    answer: " blue whale", 
    image: "https://static.wikia.nocookie.net/wildkratts/images/5/5c/Blue_Whale_RL.PNG/revision/latest?cb=20231215203017"
  },
  { 
    question: "Which animal is known for having the best memory?", 
    answer: "Elephants", 
    image: "https://africanconservation.org/wp-content/uploads/2023/01/elephants-carbon.jpeg"
  },
  { 
    question: "Which land animal is the fastest runner?", 
    answer: "Cheetah", 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/1200px-Male_cheetah_facing_left_in_South_Africa.jpg'
  },
  { 
    question: "Which animal sleeps the most?", 
    answer: "Koalas", 
    image: "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg"
  },
  { 
    question: "Which is the only mammal capable of true flight?", 
    answer: "Bat", 
    image: "https://agrilifetoday.tamu.edu/wp-content/uploads/2020/10/AdobeStock_182505240.jpeg"
  },
  { 
    question: "What is the largest species of shark?", 
    answer: "Whale shark", 
    image: "https://i.natgeofe.com/k/15d5680f-a0b6-4a0b-b369-f258493a7362/OG_Whale-Shark_KIDS_0622_16x9.jpg"
  },
  { 
    question: "Which animal has the highest blood pressure?", 
    answer: "Giraffe", 
    image: "https://www.worldatlas.com/upload/cf/93/4b/shutterstock-1385689649.jpg"
  },
  { 
    question: "What is the most venomous snake in the world?", 
    answer: "Inland taipan", 
    image: "https://www.billabongsanctuary.com.au/wp-content/uploads/2023/07/Inland-Taipan-1200x800.jpg"
  },
  { 
    question: "Which animal has the thickest fur?", 
    answer: "Sea otter", 
    image: "https://environmentamerica.org/wp-content/uploads/2023/02/EAC_Otters_savethem-e1695676447396.jpg"
  },
  { 
    question: "Which animal has the strongest bite force?", 
    answer: "Saltwater crocodile", 
    image: "https://cdn.shopify.com/s/files/1/0996/1022/files/shutterstock_2219524909.jpg?v=1695683151"
  },
  { 
    question: "Which bird has the largest wingspan?", 
    answer: "Wandering albatross", 
    image: "https://www.quarkexpeditions.com/sites/default/files/blog-images/AdobeStock_105095292.jpeg"
  }
];

// const App = () => {
//   const [index, setIndex] = useState(0);

//   const randomizeFlashcard = () => {
//     setIndex(Math.floor(Math.random() * flashcards.length));
//   };

//   return (
//     <Box display='flex' sx={{
//       backgroundImage: 'url("https://img.freepik.com/free-vector/copy-space-bokeh-spring-lights-background_52683-55649.jpg")', // Replace with your image URL
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       minHeight: '100vh', // Full viewport height
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: '2rem', // Optional: padding for spacing
//     }}
//   >
//       <Container sx={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
//         <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
//         Wild Wonders: Animal Trivia
//         </Typography>

//         <Typography variant="h4" gutterBottom sx={{ fontWeight: '300', color: '#333' }}>
//          Test your animal knowledge with these fun and educational trivia flashcards! Click through to learn more about the incredible creatures of the animal kingdom!
//         </Typography>
//         <Typography variant="body1" gutterBottom sx={{ fontWeight: '500', marginBottom: '1.5rem', color: '#555' }}>
//           Total Cards: {flashcards.length}
//         </Typography>        
//         <Flashcard flashcard={flashcards[index]} /> 
//         <Button 
//           variant="contained" 
//           color="primary" 
//           onClick={randomizeFlashcard} 
//           sx={{
//             marginTop: '2rem',
//             borderRadius: '2rem',
//             backgroundColor: '#1976d2',
//             padding: '0.5rem 1.5rem',
//             transition: 'background-color 0.3s ease, transform 0.3s ease',
//             '&:hover': {
//               backgroundColor: '#1565c0', // Darker blue on hover
//               transform: 'scale(1.05)', // Slightly larger on hover
//             },
//             '&:active': {
//               transform: 'scale(0.95)', // Slightly smaller when active
//             },
//           }}
//         >
//           Next card
//           <ArrowForwardIcon/>
//         </Button>
        
//       </Container>
//     </Box>
//   );
// };

// export default App;


const App = () => {
  const [flashcards, setFlashcards] = useState(init_flashcards); // State for flashcards
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState(''); // State to track the user's guess
  const [feedback, setFeedback] = useState(''); // State to track feedback for the guess
  const [showAnswer, setShowAnswer] = useState(false); // State to track if answer is shown
  const [streak, setStreak] = useState(0); // Track current streak
  const [longestStreak, setLongestStreak] = useState(0); // Track the longest streak

  const handleNextCard = () => {
    setFeedback(''); // Reset feedback when moving to the next card
    setShowAnswer(false); // Hide answer for the next card
    setIndex((prevIndex) => (prevIndex + 1) % flashcards.length); // Move to next card
  };

  const handlePreviousCard = () => {
    setFeedback(''); // Reset feedback when moving to the previous card
    setShowAnswer(false); // Hide answer for the previous card
    setIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length); // Move to previous card
  };

  const handleGuessSubmit = () => {
    if (guess.toLowerCase() === flashcards[index].answer.toLowerCase()) {
      setFeedback('Correct! 🎉'); // Show positive feedback if guess is correct
      setStreak(streak + 1); // Increase streak if correct
      if (streak + 1 > longestStreak) {
        setLongestStreak(streak + 1); // Update longest streak
      }
    } else {
      setFeedback('Incorrect 😞'); // Show negative feedback if guess is incorrect
      setStreak(0); // Reset streak if wrong
    }
    setShowAnswer(true); // Show answer after submission
    setGuess(''); // Clear the guess input
  };

  const shuffleCards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5); // Shuffle cards
    setFlashcards(shuffled); // Update state with shuffled cards
    setIndex(0); // Reset index after shuffle
    setFeedback(''); // Reset feedback after shuffle
    setShowAnswer(false); // Hide answer after shuffle
  };

  return (
    <Box
      display='flex'
      sx={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/copy-space-bokeh-spring-lights-background_52683-55649.jpg")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <Container sx={{ maxWidth: '700px', margin: 'auto', textAlign: 'center' }}>
        {/* Title and Description */}
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Wild Wonders: Animal Trivia
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ marginBottom: '1.5rem', color: '#555' }}>
        Test your animal knowledge with these fun and educational trivia flashcards! Click through to learn more about the incredible creatures of the animal kingdom!
        </Typography>

        {/* Streak Information */}
        <Typography variant="body1" gutterBottom sx={{ marginBottom: '1rem', color: '#333' }}>
          Number of cards: {flashcards.length}
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ marginBottom: '1.5rem', color: '#333' }}>
          Current Streak: {streak}, Longest Streak: {longestStreak}
        </Typography>

        {/* Flashcard Display */}
        <Box
          sx={{
            border: '2px solid #ddd',
            padding: '2rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '2rem',
            position: 'relative',
          }}
        >
          <Flashcard flashcard={flashcards[index]} showAnswer={showAnswer} />
        </Box>

        {/* Guess Input */}
        {!showAnswer && (
          <TextField
            variant="outlined"
            label="Guess the answer here:"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            fullWidth
            sx={{ marginBottom: '1rem' }}
          />
        )}

        {/* Feedback */}
        {feedback && (
          <Typography variant="body1" gutterBottom sx={{ color: feedback === 'Correct! 🎉' ? 'green' : 'red' }}>
            {feedback}
          </Typography>
        )}

        {/* Buttons: Submit, Shuffle, Back, Next */}
        <Box display="flex" justifyContent="center" sx={{ marginBottom: '2rem' }}>
          {/* Back button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handlePreviousCard}
            disabled={index === 0} // Disable back button if on the first card
            sx={{
              margin: '0 10px',
              borderRadius: '50%',
              padding: '10px',
            }}
          >
            <ArrowBackIcon />
          </Button>

          {/* Shuffle button */}
          <Button
            variant="outlined"
            color="primary"
            onClick={shuffleCards} // Correctly calling shuffleCards here
            sx={{
              margin: '0 10px',
              padding: '10px',
            }}
          >
            <ShuffleIcon /> Shuffle Cards
          </Button>

          {/* Next button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextCard}
            sx={{
              margin: '0 10px',
              borderRadius: '50%',
              padding: '10px',
            }}
          >
            <ArrowForwardIcon />
          </Button>
        </Box>

        {/* Submit guess button */}
        {!showAnswer && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleGuessSubmit}
            fullWidth
            sx={{
              marginTop: '1rem',
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Submit Guess
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default App;
