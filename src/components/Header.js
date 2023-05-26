import React from "react";
import { SiSpacex } from "react-icons/si";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="absolute flex items-center justify-between px-5 w-full">
        <div>
          <Link to="/">
            <SiSpacex className="text-8xl text-white"/>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/rockets" className="text-white text-sm lg:text-base">
                Rockets
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
