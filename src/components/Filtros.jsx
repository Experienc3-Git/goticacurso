export default function Filtros({ categorias, ativa, onSelecionar }) {
  return (
    <div className="filtros" role="group" aria-label="Filtrar por categoria">
      {categorias.map((c) => (
        <button key={c} className={c === ativa ? "chip ativo" : "chip"} onClick={() => onSelecionar(c)}>{c}</button>
      ))}
    </div>
  );
}
