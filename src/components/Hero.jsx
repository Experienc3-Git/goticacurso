export default function Hero({ busca, onBusca }) {
  return (
    <section className="hero">
      <div className="container">
        <h1>Aprenda um pouco por dia.<br />Aperfeiçoe o serviço público.</h1>
        <p>Cursos curtos e práticos para servidores que querem se atualizar e se especializar, no seu ritmo.</p>
        <label className="busca">
          <span className="sr">Buscar curso</span>
          <input type="search" placeholder="Busque por tema, ex.: licitação, LGPD…" value={busca} onChange={(e) => onBusca(e.target.value)} />
        </label>
      </div>
    </section>
  );
}
