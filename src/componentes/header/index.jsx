import "./header.css";
import logo from "../../assets/1.png";

function Header() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" width={80} />
        </div>
        <div className="containerNav">
          <nav>
            <a href="" className="navLink">
              Precio
            </a>
            <a href="" className="navLink">
              {" "}
              Preguntas Frecuentes
            </a>
            <a href="" className="navLink">
              Caracteristicas
            </a>
          </nav>
          <button className="btn">Contacto</button>
        </div>
      </div>
    </>
  );
}
export default Header;
