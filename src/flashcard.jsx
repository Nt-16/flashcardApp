// import{ useState } from 'react';
// import PropTypes from 'prop-types';
// import { Card, CardContent, Typography, Box } from '@mui/material';

// const Flashcard = ({ flashcard }) => {
//   const [showAnswer, setShowAnswer] = useState(false);

//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',

//      }}>
//       <Card 
//         onClick={() => setShowAnswer(!showAnswer)} 
//         sx={{ 
//           cursor: 'pointer', 
//           width: '100%',
//           height: '100%', 
//           maxWidth: '900px',
//           padding: '1rem', 
//           boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
//           transition: 'transform 0.2s', 
//           '&:hover': { transform: 'scale(1.05)' },
//         }}
//       >
//         <CardContent sx={{ textAlign: 'center' }}>
//         {showAnswer && flashcard.image && (
//             <img 
//             src={flashcard.image} 
//             alt={flashcard.question} 
//             style={{ 
//               maxWidth: '100%', 
//               height: 'auto', 
//               borderRadius: '10px', // Optional: rounded corners for the image
//               marginBottom: '1rem', // Space between the image and text
//               maxHeight: '60%', // Limit the image height to maintain card size
//               }} 
//             />
//           )}
//           <Typography 
//             variant="h5" 
//             sx={{ 
//                 fontWeight: 'bold', 
//                 height: '30%', // Adjusted to fit fixed height
//                 color: showAnswer ? '#388e3c' : '#1976d2',
//                 transition: 'color 0.2s ease-in-out',
//                 backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for text readability
//                 padding: '1rem', // Padding for better text spacing
//                 borderRadius: '10px', // Rounded corners for the text background
//             }}
//           >
//             {showAnswer ? flashcard.answer : flashcard.question}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// Flashcard.propTypes = {
//   flashcard: PropTypes.shape({
//     question: PropTypes.string.isRequired,
//     answer: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default Flashcard;

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Flashcard = ({ flashcard }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card 
        onClick={() => setShowAnswer(!showAnswer)} 
        sx={{ 
          cursor: 'pointer', 
          width: '300px', // Fixed width
          height: '400px', // Fixed height
          padding: '1rem', 
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
          transition: 'transform 0.2s', 
          border: '2px solid #1976d2', // Add border
          borderRadius: '10px', // Rounded corners
          backgroundColor: '#ffffff', // Set a background color for the card
          '&:hover': { transform: 'scale(1.05)' },
        }}
      >
        <CardContent sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
          {/* Show the image only when the answer is revealed */}
          {showAnswer && flashcard.image && (
            <img 
              src={flashcard.image} 
              alt={flashcard.question} 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '10px', // Optional: rounded corners for the image
                marginBottom: '1rem', // Space between the image and text
                maxHeight: '60%', // Limit the image height to maintain card size
              }} 
            />
          )}
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 'bold', 
              flexGrow: 1, // Allow the text to grow and occupy space
              color: showAnswer ? '#388e3c' : '#1976d2',
              transition: 'color 0.2s ease-in-out',
              backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for text readability
              padding: '1rem', // Padding for better text spacing
              borderRadius: '10px', // Rounded corners for the text background
            }}
          >
            {showAnswer ? flashcard.answer : flashcard.question}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

Flashcard.propTypes = {
  flashcard: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Flashcard;
