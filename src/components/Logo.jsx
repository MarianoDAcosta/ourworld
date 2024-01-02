import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/owt-logo.jpg"
        alt="OurWorldTravel logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
