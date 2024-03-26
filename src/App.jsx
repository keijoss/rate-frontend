import { useState } from "react";
import Rating from "react-rating";
import { Button } from "./components/ui/button";

function App() {
  const [rating, setRating] = useState(0); // Initial value

  return (
    <>
      <Rating
        onChange={(e) => {
          console.log(e);
        }}
      />
      <Button/>
    </>
  );
}
export default App;
