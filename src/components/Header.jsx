import Gota from "./Gota.jsx";

export default function Header({ matriculados, aba, onMudarAba }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="logo"><Gota size={28} /> GoticaCurso</div>
        <nav className="nav" aria-label="Principal">
          <button className={aba === "catalogo" ? "ativo" : ""} onClick={() => onMudarAba("catalogo")}>Cursos</button>
          <button className={aba === "meus" ? "ativo" : ""} onClick={() => onMudarAba("meus")}>
            Meus cursos {matriculados > 0 && <span className="badge">{matriculados}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}
