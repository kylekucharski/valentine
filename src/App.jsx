import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import photo1 from "./assets/image.jpg"
import photo2 from "./assets/image2.jpg"
import photo3 from "./assets/image3.jpg"
import photo4 from "./assets/image4.jpg"
import photo5 from "./assets/image5.jpg"
import photo6 from "./assets/image6.jpg"


function ValentinePage() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const navigate = useNavigate();

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
        
        .font-handwriting {
          font-family: 'Indie Flower', cursive;
        }
        
        img {
          filter: saturate(0.9);
        }
      `}</style>

      {yesPressed ? (
        <div className="flex flex-col items-center">
          <img 
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
            className="mb-4"
          />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!!
          </div>
          <button
            onClick={() => navigate('/itinerary')}
            className="mt-8 bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-lg text-xl animate-bounce"
          >
            See What I Have Planned For Us! ❤️
          </button>
        </div>
      ) : (
        <>
          {/* Left column polaroids */}
          <div className="fixed top-8 md:left-32 left-2 bg-white p-2 md:p-4 pb-6 md:pb-8 shadow-xl rotate-3 hover:scale-105 transition-transform z-10">
            <img
              src={photo1}
              className="md:w-48 w-24 md:h-48 h-24 object-cover"
              alt="Memory 1"
            />
            <p className="text-center mt-2 font-handwriting text-gray-600 text-sm md:text-base"> </p>
          </div>

          <div className="fixed md:top-96 top-64 md:left-16 left-1 bg-white p-2 md:p-4 pb-6 md:pb-8 shadow-xl -rotate-6 hover:scale-105 transition-transform z-10">
            <img
              src={photo3}
              className="md:w-44 w-24 md:h-44 h-24 object-cover"
              alt="Memory 3"
            />
            <p className="text-center mt-2 font-handwriting text-gray-600 text-sm md:text-base"></p>
          </div>

          <div className="fixed md:bottom-20 bottom-8 md:left-28 left-2 bg-white p-2 md:p-4 pb-6 md:pb-8 shadow-xl rotate-6 hover:scale-105 transition-transform z-10">
            <img
              src={photo5}
              className="md:w-48 w-24 md:h-48 h-24 object-cover"
              alt="Memory 5"
            />
            <p className="text-center mt-2 font-handwriting text-gray-600 text-sm md:text-base"></p>
          </div>

          {/* Right column polaroids */}
          <div className="fixed top-8 md:right-32 right-2 bg-white p-2 md:p-4 pb-6 md:pb-8 shadow-xl -rotate-3 hover:scale-105 transition-transform z-10">
            <img
              src={photo2}
              className="md:w-48 w-24 md:h-48 h-24 object-cover"
              alt="Memory 2"
            />
            <p className="text-center mt-2 font-handwriting text-gray-600 text-sm md:text-base"></p>
          </div>

          <div className="fixed md:top-96 top-64 md:right-16 right-1 bg-white p-2 md:p-4 pb-6 md:pb-8 shadow-xl rotate-6 hover:scale-105 transition-transform z-10">
            <img
              src={photo4}
              className="md:w-44 w-24 md:h-44 h-24 object-cover"
              alt="Memory 4"
            />
            <p className="text-center mt-2 font-handwriting text-gray-600 text-sm md:text-base"></p>
          </div>

          <div className="fixed md:bottom-20 bottom-8 md:right-28 right-2 bg-white p-2 md:p-4 pb-6 md:pb-8 shadow-xl -rotate-6 hover:scale-105 transition-transform z-10">
            <img
              src={photo6}
              className="md:w-48 w-24 md:h-48 h-24 object-cover"
              alt="Memory 6"
            />
            <p className="text-center mt-2 font-handwriting text-gray-600 text-sm md:text-base"></p>
          </div>
          
          <img
            className="h-[180px] md:h-[230px] mt-16 md:mt-0 mix-blend-multiply relative z-20"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-3xl md:text-6xl my-4 text-center px-4">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center px-4">
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-rose-600 hover:bg-rose-700 rounded-lg text-white font-bold py-2 px-4"
              >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

function ItineraryPage() {
  const navigate = useNavigate();
  const dateIdeas = [
    {
      title: "We Can Spend The Whole Day Together!!!!!",
      description: "I love you and I want to spend all day with you! We can start by having a sleepover and waking up together :)",
      time: ""
    },
    {
      title: "Go to The Botantical Gardens!",
      description: "I always have so much fun with you walking around the gardens with you:)",
      time: ""
    },
    {
      title: "Go on A Picnic!",
      description: "We can bring fun crafts like coloring and knitting <3",
      time: ""
    },
    {
      title: "Cook Dinner Together!",
      description: "I love cooking with you! We can buy a nice bottle of wine and try a New York Times Recipe!",
      time: ""
    },
    {
      title: "Spend The Evening Together",
      description: "We can light candles and have a romantic night together!",
      time: ""
    }
  ];

  return (
    <div className="min-h-screen bg-rose-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-600">
            Our Valentine's Day Together ❤️
          </h1>
          <button
            onClick={() => navigate('/')}
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            ← Back
          </button>
        </div>
        
        <div className="space-y-6">
          {dateIdeas.map((idea, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-200"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-rose-500">
                  {idea.title}
                </h3>
                <span className="text-gray-600 font-medium">
                  {idea.time}
                </span>
              </div>
              <p className="text-gray-700">
                {idea.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Footer = () => {};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ValentinePage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
      </Routes>
    </BrowserRouter>
  );
}