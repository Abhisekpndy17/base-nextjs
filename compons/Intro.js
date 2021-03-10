import style from "../styles/Header.module.css";
import Parallex from "react-rellax";
import Link from "next/link";

const Intro = () => {
  return (
    <div>
      <div className={style.head}>
        <Parallex speed={2}>
          <h3 className={style.title}>
            <span>Abhishek</span> Pandey
          </h3>
          <p className={style.description}>
            HTML5 | CSS3 | JavaScript | AWS & Web Developer
          </p>
          <Link href="./about"><div className="more"> About more &rarr;</div></Link>
        </Parallex>
      </div>
    </div>
  );
};

export default Intro;
