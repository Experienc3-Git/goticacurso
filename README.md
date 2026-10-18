# GoticaCurso
Plataforma de aprendizagem para servidores públicos (React + Vite).

## Como executar
```bash
npm install
npm run dev
```
Abra o endereço exibido no terminal (normalmente http://localhost:5173).

## Funcionalidades
- Catálogo com busca por texto e filtro por categoria
- Matrícula e cancelamento de matrícula
- Acompanhamento de aulas concluídas com progresso visual (gota que enche)
- Certificado liberado em 100% de progresso
- Progresso salvo no navegador (localStorage)
- Layout responsivo

## Estrutura
- `src/App.jsx`: estado global (useState/useEffect) e composição das telas
- `src/components/`: Header, Hero, Filtros, CursoCard, MeuCurso, Gota, Footer
- `src/data/courses.js`: dados dos cursos
- `src/index.css`: estilos e responsividade
