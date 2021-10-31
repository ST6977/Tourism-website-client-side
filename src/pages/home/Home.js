import React, { useEffect, useState } from "react";
import axios from "axios";
import Events from "./event/Events";
import Footer from "../../Footer/Footer";


const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("https://creepy-cat-14143.herokuapp.com/events")
      .then((res) => setEvents(res.data))
      .catch(error =>console.log(error))
  }, []);


  console.log(events) ;
  return (
 
///banner
    <div className=" ">
      {/* Banner  */}
      <section>

        <div>
          <img className="w-100 h-30" src="https://holidaymatrix.co.in/img/slide-image-3.jpg" alt="" />
        </div>
      </section>





      <h1 className="text-4xl text-center my-10 font-bold">
      Enjoy Your Vacation Tour With Us!And Make Your Trip Memorable With ShareTrip!!
      </h1>

      <section className="container mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto">
        {events.map((event) => (
          <Events
            key={event._id}
            id={event._id}
            img={event.img}
            name={event.name}
            price={event.price}
            description={event.description}
          />
        ))}
      </section>


    </div>
  );
};

export default Home;
