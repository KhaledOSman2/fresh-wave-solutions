
import React, { useState } from 'react';
import Button from './Button';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "What percentage of Earth's water is freshwater?",
    options: ["About 3%", "About 20%", "About 50%", "About 75%"],
    correctAnswer: 0,
    explanation: "Only about 3% of Earth's water is freshwater. The rest is saltwater found in oceans and seas."
  },
  {
    id: 2,
    text: "Which desalination process uses membranes to filter salt from water?",
    options: ["Distillation", "Reverse Osmosis", "Ion Exchange", "Electrodialysis"],
    correctAnswer: 1,
    explanation: "Reverse Osmosis uses semi-permeable membranes that allow water molecules to pass through while blocking salt and impurities."
  },
  {
    id: 3,
    text: "What is the biggest challenge in desalination?",
    options: ["Water sourcing", "Energy consumption", "Storage", "Distribution"],
    correctAnswer: 1,
    explanation: "Energy consumption is the biggest challenge in desalination, as traditional methods require significant energy to separate salt from water."
  }
];

const QuizSection: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(false);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleCheckAnswer = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const question = questions[currentQuestion];

  return (
    <section id="quiz" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-sea-50 to-white"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Test Your Water Knowledge</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take our quiz to discover fascinating facts about water desalination and global water resources.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="water-card overflow-hidden">
            {!quizCompleted ? (
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-medium text-gray-500">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium px-3 py-1 bg-sea-100 text-sea-800 rounded-full">
                    Score: {score}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-6">{question.text}</h3>
                
                <div className="space-y-3 mb-8">
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full p-4 text-left rounded-lg border transition-all ${
                        selectedOption === index
                          ? 'border-sea-600 bg-sea-50 shadow-sm'
                          : 'border-gray-200 hover:border-sea-300 hover:bg-gray-50'
                      }`}
                      onClick={() => handleOptionSelect(index)}
                      disabled={showResult}
                    >
                      <span className="text-gray-700">{option}</span>
                    </button>
                  ))}
                </div>
                
                {showResult && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    selectedOption === question.correctAnswer
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    <p className="font-medium mb-1">
                      {selectedOption === question.correctAnswer ? '✓ Correct!' : '✗ Incorrect!'}
                    </p>
                    <p>{question.explanation}</p>
                  </div>
                )}
                
                <div className="flex justify-end space-x-3">
                  {!showResult && selectedOption !== null && (
                    <Button 
                      variant="secondary" 
                      onClick={handleCheckAnswer}
                    >
                      Check Answer
                    </Button>
                  )}
                  
                  {showResult && (
                    <Button 
                      variant="primary" .
                      onClick={handleNextQuestion}
                    >
                      {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Quiz Completed!</h3>
                <p className="text-xl mb-6">Your score: {score} out of {questions.length}</p>
                
                <div className="space-y-6">
                  <p className="text-gray-600">
                    {score === questions.length
                      ? "Perfect score! You're a water expert!"
                      : score >= questions.length / 2
                      ? "Good job! You know quite a bit about water resources."
                      : "Thanks for playing! Learn more about water desalination in our other sections."}
                  </p>
                  
                  <Button 
                    variant="primary" 
                    onClick={resetQuiz}
                  >
                    Take Quiz Again
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
