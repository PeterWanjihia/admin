import CliniciansTable from "../components/CliniciansTable";
import { FiSearch, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import ModalContainer from "../components/ModalContainer";
import AddClinician from "../components/AddClinician";
import { toggleAddClinician } from "../redux/features/ModalSlice";
import { useEffect, useState } from "react";
import { clinicians } from "../../data";

function Clinicians() {
  const dispatch = useDispatch();
  const { addClinicianModal } = useSelector((store) => store.modals);
  const { user } = useSelector((store) => store.auth);
  const isAdmin = user.role === "admin";

  const [filtered, setFiltered] = useState([]);
  const [name, setName] = useState("");


  useEffect(() => {
    const getClinicians = () => {
      if (name) {
        setFiltered(
          clinicians.filter((p) => p.name.toLowerCase().includes(name))
        );
      } else {
        setFiltered(clinicians);
      }
    };
    getClinicians();
  }, [filtered, name]);

  return (
    <div className="p-3">
      <section className="bg-white p-3">
        <header className="flex items-center justify-between my-3 mb-5">
          <p className="text-3xl font-bold">Clinicians</p>

          <section className="flex items-center gap-3">
            <button
              disabled={!isAdmin}
              onClick={() => dispatch(toggleAddClinician())}
              className="bg-red text-white px-4 pr-6 rounded-md py-1.5 font-bold text-xl flex items-center gap-2"
            >
              <FiPlus />
              <span className="text-lg">Add</span>
            </button>
            <div className="flex items-center gap-3 bg-input px-3 p-2 rounded-md text-lblack">
              <FiSearch className="text-xl" />
              <input
                type="search"
                placeholder="Search with name"
                className="bg-input"
                value={name}
                onChange={(e) => setName(e.target.value.toLowerCase().trim())}
              />
            </div>
          </section>
        </header>
        <CliniciansTable filtered={filtered} />
      </section>
      <ModalContainer open={addClinicianModal}>
        <AddClinician dispatch={dispatch} />
      </ModalContainer>
    </div>
  );
}

export default Clinicians;
