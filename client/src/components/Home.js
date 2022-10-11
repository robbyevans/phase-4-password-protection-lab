// part-1


import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NewEventForm from "./NewEventForm";
import EventItem from "./EventItem";


function Home({ user }) {

  // part-2

  const [events, setEvents] = useState([]);
  const[isTrue,setIsTrue]=useState(true)

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then(setEvents);
  }, []);

  function handleAddSpice(addedSpice) {
    setEvents((events) => [...events, addedSpice]);
  }

  function handleUpdateSpice(updatedSpice) {
    setEvents((events) =>
      events.map((spice) => {
        return spice.id === updatedSpice.id ? updatedSpice : spice;
      })
    );
  }

  function handleDeleteSpice(deletedSpice) {
    setEvents((events) =>
      events.filter((spice) => spice.id !== deletedSpice.id)
    );
  }

  function handleClick(){
    setIsTrue(!isTrue)
  }
  
  if (user) {
    return <><h1>Welcome, {user.username}!</h1>
    <h1>This is the landing page</h1>

    {/* part-3:body content */}

    <Header spiceCount={events.length} />
      <main>

      <button className="btn" onClick={handleClick}> Add Event +</button>
      {isTrue ? <div className="sidebar"><NewEventForm onAddSpice={handleAddSpice} /></div> : null} 
      <div><h1>Available events</h1></div>  
        <section className="spice-list">
          {events.map((spice) => (
            <EventItem
              key={spice.id}
              spice={spice}
              onUpdateSpice={handleUpdateSpice}
              onDeleteSpice={handleDeleteSpice}
            />
          ))}
        </section>
      </main>


    </>;
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}

export default Home;
