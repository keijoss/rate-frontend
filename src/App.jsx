import { useState } from "react";
import Rating from "react-rating";
import { Button } from "./components/ui/button";
import StarRating from "./components/TryingStar";

function App() {
  const [rating, setRating] = useState(0); // Initial value

  return (
    <>
      <StarRating
        totalStars={5}
        setRating={setRating}
      />
    </>
  );
}
export default App;
