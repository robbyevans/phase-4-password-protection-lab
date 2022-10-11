import StarRating from "./StarRating";

function SpiceItem({ spice, onUpdateSpice, onDeleteSpice }) {
  const { id, image, title, description, location, rating } = spice;

  function handleUpdateRating(pct) {
    const newRating = pct * 5;
    fetch(`/events/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newRating }),
    })
      .then((r) => r.json())
      .then(onUpdateSpice);
  }

  function handleBook() {
    fetch(`/event/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((r)=>r.json)
  }

  function handleDeleteEvent() {
    fetch(`/event/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteSpice(spice);
      }
    });
  }

  return (
    <div className="spice-item card">
      <img src={image} alt={title} />
      <div className="details">
        <h2>{title}</h2>
        <p> {description} </p>
        <p>
          Location: <em>{location}</em>
        </p>
        <div>
          Stars:{" "}
          <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
        </div>
        <p>
        <button onClick={handleBook}>GRAB TICKET</button>
          <button onClick={handleDeleteEvent}>Delete Event</button>
        </p>
      </div>
    </div>
  );
}

export default SpiceItem;
