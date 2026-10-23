import { useState } from "react";
import Navbar from "./components/Navbar";
import Campus3D from "./components/Campus3D";
import BuildingPanel from "./components/BuildingPanel";
import { getBuilding } from "./api/buildings";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSelect(id) {
    setLoading(true);
    setError("");

    try {
      setSelected(await getBuilding(id));
    } catch (err) {
      setError(err.message || "Could not load building data.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-layout">
      <Navbar />

      <main className="page-content">
        <section id="overview">
          <h1>CampusTwin AI</h1>
          <p>Select a building on the campus to view its data.</p>
        </section>

        <section id="campus">
          <h2>Campus</h2>
          <div style={{ height: 450 }}>
            <Campus3D onSelect={handleSelect} />
          </div>
        </section>

        <section id="energy">
          <h2>Building information</h2>

          {loading && <p>Loading building data...</p>}
          {error && <p role="alert">{error}</p>}

          {!loading && !error && (
            <BuildingPanel building={selected} />
          )}
        </section>

        <section id="alerts">
          <h2>Alerts</h2>
          {selected ? (
            <p>
              Building data is simulated. Review occupancy and energy readings
              before making decisions.
            </p>
          ) : (
            <p>Select a building to see its information.</p>
          )}
        </section>
      </main>
    </div>
  );
}