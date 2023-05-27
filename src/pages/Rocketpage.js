import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "reactstrap";
export default function Rocketpage() {
  const [rockets, setRockets] = useState([]);
  const [prompt, setPrompt] = useState(false);
  const [details, setDetails] = useState({description:"", type:"", status:""})
  useEffect(() => {
    axios.get("https://spacex-world.onrender.com/rockets").then((res) => {
      setRockets(res.data);
    });
  }, []);
  console.log(rockets);
  const handleDetails=(x,y,z)=>{
    setDetails({description:x, type:y, status:z})
  }
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
                onClick={()=>{setPrompt(!prompt);handleDetails(items.description,items.type, items.active)}}
              />
              <p>country: {items.country}</p>
              <a
                href={items.wikipedia}
                className="my-2 text-lg text-black bg-white"
              >
                wikipedia
              </a>
            </div>
          );
        })}
        <Modal isOpen={prompt} toggle={() => setPrompt(!prompt)}>
         <div className="h-80 w-80 text-white text-lg flex flex-col mt-2 border-double border-4 border-sky-500 border-white">
            <p>Descrption: {details.description}</p>
            <p>Type: {details.type}</p>
            <p>Current Status: {details.status?"Active":"Currently Not Active"}</p>
         </div>
      </Modal>
      </div>
    </>
  );
}
