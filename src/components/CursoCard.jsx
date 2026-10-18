export default function CursoCard({ curso, matriculado, onMatricular }) {
  return (
    <article className="card">
      <span className="tag">{curso.categoria}</span>
      <h3>{curso.titulo}</h3>
      <p>{curso.descricao}</p>
      <p className="meta">{curso.horas} horas · {curso.aulas.length} aulas · {curso.nivel}</p>
      <button className="btn" disabled={matriculado} onClick={() => onMatricular(curso.id)}>
        {matriculado ? "Você já está matriculado" : "Matricular-se"}
      </button>
    </article>
  );
}
