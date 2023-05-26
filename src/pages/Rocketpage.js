import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Rocketpage() {
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    axios.get("https://spacex-world.onrender.com/rockets").then((res) => {
      setRockets(res.data);
    });
  }, []);
  console.log(rockets);
  return (
    <>
      <h1 className="text-white text-center text-xl">Rockets</h1>
      <div className="flex mt-10 py-2 justify-evenly text-white">
        {rockets.map((items, i) => {
          return (
            <div key={i} className="w-80">
              <img
                src={items.flickr_images[0]}
                alt="rc1"
                className="h-80 w-80"
              />
              <p>country: {items.country}</p>
              <p>description: {items.description}</p>
              <a href={items.wikipedia} className="my-2 text-lg text-black bg-white">
                wikipedia
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
