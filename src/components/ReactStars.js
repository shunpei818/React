import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ReactStars({ totalStars = 10 , count = 1}) {
  const [selectedStars, setSelectedStars] = useState(count);

  const Star = ({ selected = false, onSelect = () => {} }) => (
    <FaStar color={selected ? "red" : "gray"} onClick={() => onSelect()} />
  );

  return [...Array(totalStars)].map((_, i) => (
    <Star
      key={i}
      selected={i < selectedStars}
      onSelect={() => setSelectedStars(i + 1)}
    />
  ));
}
