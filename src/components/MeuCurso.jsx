import Gota from "./Gota.jsx";

export default function MeuCurso({ curso, concluidas, onAlternarAula, onCancelar }) {
  const pct = Math.round((concluidas.length / curso.aulas.length) * 100);
  return (
    <article className="meu">
      <Gota size={72} progresso={pct} />
      <div className="meu__corpo">
        <h3>{curso.titulo}</h3>
        <p className="meta">{pct}% concluído</p>
        <ul className="aulas">
          {curso.aulas.map((aula, i) => (
            <li key={i}>
              <label>
                <input type="checkbox" checked={concluidas.includes(i)} onChange={() => onAlternarAula(curso.id, i)} />
                <span className={concluidas.includes(i) ? "feita" : ""}>{aula}</span>
              </label>
            </li>
          ))}
        </ul>
        {pct === 100 && <p className="certificado">Parabéns! Curso concluído. Seu certificado de {curso.horas} horas está liberado.</p>}
        <button className="btn btn--leve" onClick={() => onCancelar(curso.id)}>Cancelar matrícula</button>
      </div>
    </article>
  );
}
