import "./App.css";
import MovieScript from "./components/Movie/MovieSummary.tsx";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>

        <div className="app">
          <MovieScript />
        </div>
      </main>
    </Layout>
  );
}

export default App;
