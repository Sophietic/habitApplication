import React from "react";
import axios from "axios";
import "bulma/css/bulma.css";

function MyHabitButton(props) {
  function addToMyHabits() {
    const { id } = props.match.params; //id van habit
    const { userId } = props.loggedInUser._id; //id van user

    axios
      .post(`http://localhost:5000/api/explore/${id}/addToMyHabits`, { userId }) //userId stuur je nu naar de server
      .then((response) => {
        console.log(userId);
        props.history.push(`/explore/${id}`); //werkt niet??
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className="control">
      <form>
        <button  onClick={addToMyHabits}>
          Add to myHabits ffffesdfds
        </button>
      </form>
    </div>
  );
}

export default MyHabitButton;
