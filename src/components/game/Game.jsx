import { useState, useEffect } from "react";
import Card from "./Card";
import { agents } from "../../assets/data/constants";

function Game() {
  const [shuffledAgents, setShuffledAgents] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedAgents, setClickedAgents] = useState([]);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    shuffleAgents();
  }, []); // Run once on mount

  const handleCurrentScoreIncrement = () => {
    setCurrentScore(currentScore + 1);
  };

  const resetCurrentScore = () => {
    handleNewHighScore();
    setCurrentScore(0);
    setClickedAgents([]);
  };

  const handleNewHighScore = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  };
  const shuffleAgents = () => {
    const shuffled = [...agents];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledAgents(shuffled);
  };

  const handleCardClick = (id) => {
    if (!clickedAgents.includes(id)) {
      setClickedAgents([...clickedAgents, id]);
      handleCurrentScoreIncrement();
    } else {
      resetCurrentScore();
    }
    shuffleAgents();
  };

  return (
    <div className="w-full p-8">
      <div>
        <h1 className="text-riot-red text-xl font-['Valorant']">
          How to Play?
        </h1>
        <p>
          Get points by clicking on an agent&apos;s card but don&apos;t click on
          any agent more than once!
        </p>
      </div>
      <div>
        <div className="text-xl mt-2 mb-8">
          <p>
            <span className="">Current Score: </span>
            {currentScore}
          </p>
          <p>
            <span className="text-riot-red">High Score: </span>
            {highScore}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shuffledAgents.map((agent) => (
          <Card
            key={agent.id}
            name={agent.name}
            role={agent.role}
            country={agent.country}
            image={`/assets/images/agents/${agent.name.toLowerCase()}.webp`}
            onClick={() => handleCardClick(agent.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
