import { useEffect, useState } from "react";
import { cursos, categorias } from "./data/courses.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Filtros from "./components/Filtros.jsx";
import CursoCard from "./components/CursoCard.jsx";
import MeuCurso from "./components/MeuCurso.jsx";
import Footer from "./components/Footer.jsx";

// Progresso salvo no navegador: { [idDoCurso]: [índices das aulas concluídas] }
const lerProgresso = () => {
  try { return JSON.parse(localStorage.getItem("goticacurso")) || {}; } catch { return {}; }
};

export default function App() {
  const [aba, setAba] = useState("catalogo");
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [progresso, setProgresso] = useState(lerProgresso);

  useEffect(() => { localStorage.setItem("goticacurso", JSON.stringify(progresso)); }, [progresso]);

  const matricular = (id) => setProgresso((p) => ({ ...p, [id]: [] }));
  const cancelar = (id) => setProgresso(({ [id]: _, ...resto }) => resto);
  const alternarAula = (id, i) =>
    setProgresso((p) => {
      const atual = p[id] || [];
      return { ...p, [id]: atual.includes(i) ? atual.filter((x) => x !== i) : [...atual, i] };
    });

  const filtrados = cursos.filter((c) =>
    (categoria === "Todas" || c.categoria === categoria) &&
    (c.titulo + c.descricao).toLowerCase().includes(busca.toLowerCase())
  );
  const meus = cursos.filter((c) => progresso[c.id]);

  return (
    <>
      <Header matriculados={meus.length} aba={aba} onMudarAba={setAba} />
      <main>
        {aba === "catalogo" ? (
          <>
            <Hero busca={busca} onBusca={setBusca} />
            <section className="container secao">
              <Filtros categorias={categorias} ativa={categoria} onSelecionar={setCategoria} />
              {filtrados.length === 0 ? (
                <p className="vazio">Nenhum curso encontrado. Tente outro termo ou escolha “Todas” as categorias.</p>
              ) : (
                <div className="grade">
                  {filtrados.map((c) => (
                    <CursoCard key={c.id} curso={c} matriculado={!!progresso[c.id]} onMatricular={matricular} />
                  ))}
                </div>
              )}
            </section>
          </>
        ) : (
          <section className="container secao">
            <h2>Meus cursos</h2>
            {meus.length === 0 ? (
              <p className="vazio">Você ainda não se matriculou em nenhum curso. <button className="link" onClick={() => setAba("catalogo")}>Ver cursos disponíveis</button></p>
            ) : (
              meus.map((c) => (
                <MeuCurso key={c.id} curso={c} concluidas={progresso[c.id]} onAlternarAula={alternarAula} onCancelar={cancelar} />
              ))
            )}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
