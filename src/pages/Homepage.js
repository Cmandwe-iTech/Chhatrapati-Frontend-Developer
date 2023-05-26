import React from "react";
import Header from "../components/Header";
export default function Homepage() {
  return (
    <>
      <Header />
      <section className="showcase">
        <div className="overlay">
          <article>
            <h1 className="heading text-center capitalize">
              All The Spacex Data in one place
            </h1>
          </article>
        </div>
      </section>
    </>
  );
}
