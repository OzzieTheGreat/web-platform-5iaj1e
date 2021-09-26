import { Link } from "react-router-dom";

function movies() {
  return (
    <div>
  <h1> Movies </h1>
  <p> In this page you will be looking at the background information on each movie</p>
<h2> The Hunger Games</h2>
<p>In what was once North America, the Capitol of Panem maintains its hold on its 12 districts by forcing them each to select a boy and a girl, called Tributes, to compete in a nationally televised event called the Hunger Games. Every citizen must watch as the youths fight to the death until only one remains. District 12 Tribute Katniss Everdeen (Jennifer Lawrence) has little to rely on, other than her hunting skills and sharp instincts, in an arena where she must weigh survival against love.</p>
<p>
  <Link to="../index.html"> Back to the mainpage.</Link>

<cite>Source: https://www.rottentomatoes.com/m/the_hunger_games</cite>
</p>
<p>
  <Link to="index.html">Back to the Mainpage</Link>
</p>
</div>
  )
}

export default movies;