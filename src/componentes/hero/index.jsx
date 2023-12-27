import "./hero.css";
import mujer from "../../assets/2.png";
function Hero() {
  return (
    <>
      <div className="containerHero">
        <div className="containerText">
          <h1>
            Crea tu propia <br /> tienda online
          </h1>
          <button className="btnHero"> Ver Demo</button>
        </div>

        <div className="imgHero">
          <img src={mujer} alt="" className="imgHero" />
        </div>
      </div>
    </>
  );
}
export default Hero;
