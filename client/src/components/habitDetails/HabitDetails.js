import React, { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import "./HabitDetails.css";
// import MyHabitButton from ".././myHabbitButton/myHabitButton";


const initialState = {
  _id: " ",
  habitname: " ",
  description: " ",
  categories: " ",
};

function HabitDetails(props) {
  const [habitDetailState, setHabitDetail] = useState(initialState);

  function getOneHabit() {
    const { id } = props.match.params;

    axios
      .get(`http://localhost:5000/api/explore/${id}`)
      .then((habitFromApi) => {
        setHabitDetail(habitFromApi.data);
      })
      .catch((error) => console.error(error));
  }

  useEffect(getOneHabit, [props.match.params]);

  return (
    <div>
      <div key={habitDetailState._id}>
        <h3>{habitDetailState.habitname}</h3>
        <h3>{habitDetailState.description}</h3>
        <h3>{habitDetailState.categories}</h3> 
    </div>
     {/* <div><MyHabitButton /></div> */}
      </div>
    
  );
}

export default HabitDetails;
