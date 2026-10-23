import Navbar from "./components/navbar/navbar";

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="page-content">
        <section id="overview">
          <h1>CampusTwin AI</h1>
          <p>Smart campus overview</p>
        </section>

        <section id="campus">
          <h2>Campus</h2>
          <p>Your interactive campus view will appear here.</p>
        </section>

        <section id="energy">
          <h2>Energy</h2>
          <p>Energy information will appear here.</p>
        </section>

        <section id="alerts">
          <h2>Alerts</h2>
          <p>Campus alerts will appear here.</p>
        </section>
      </main>
    </div>
  );
}