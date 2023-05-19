import { useState } from "react";
import PatientsTable from "../components/PatientsTable";
import { FiSearch } from "react-icons/fi";
import { patients } from "../../data";
import { useEffect } from "react";

function Patients() {
  const [filtered, setFiltered] = useState([]);
  const [name, setName] = useState("");
  

  useEffect(() => {
    const getPatients = () => {
      if (name) {
        setFiltered(
          patients.filter((p) => p.ccc_no.toLowerCase().includes(name))
        );
      } else {
        setFiltered(patients);
      }
    };
    getPatients();
  }, [filtered, name]);

  return (
    <div className="p-3">
      <section className="bg-white p-3">
        <header className="flex items-center justify-between my-3 mb-5">
          <div className="flex items-center gap-3">
            <p className="text-3xl font-bold">Patients</p>
          </div>
          <div className="flex items-center gap-3 bg-input px-3 p-2 rounded-md text-lblack">
            <FiSearch className="text-xl" />
            <input
              type="search"
              placeholder="Search with CCC number"
              className="bg-input"
              value={name}
              onChange={(e) => setName(e.target.value.toLowerCase().trim())}
            />
          </div>
        </header>
        <PatientsTable filtered={filtered} />
      </section>
    </div>
  );
}

export default Patients;
