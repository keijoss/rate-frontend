import { useState } from "react";
import { FaStar } from "react-icons/fa";
//Helper function to create an array of any length we want of anything we want!
const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return (
    <FaStar
      size={"1em"}
      color={selected ? "red" : "black"}
      onClick={onSelect}
    />
  );
}

export default function StarRating({ totalStars = 5 , setRating}) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div className="flex">
      {createArray(totalStars).map((n, i) => (
      <Star
        key={i}
        selected={selectedStars > i}
        onSelect={() => {
          setSelectedStars(i === selectedStars-1 ? 0  : i+1);
          setRating(i + 1);
        }}
        
      />
      ))}
    </div>
  ); 
}
