import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div class="nav_bar">
        {/* <div> */}
          <Link className="link" to="/">Home</Link>
        {/* </div> */}
        {/* <div> */}
          {user ? (
            <button onClick={handleLogoutClick}>Logout</button>
          ) : (
            <>
              <Link className="link" to="/signup">Signup</Link>
              <Link className="link" to="/login">Login</Link>
            </>
          )}
        {/* </div> */}
      </div>
    </header>
  );
}

export default NavBar;
