import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          We travel the world.
          <br />
          OurWorldTravel keeps track of our adventures.
        </h1>
        <h2>
          A world map that tracks our footsteps into every city we can think of.
          So, we'll never forget our wonderful experiences, and show our friends
          how we have wandered the world.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
