import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import ModalContainer from "./ModalContainer";
import EditPatient from "./EditPatient";
import { toggleEditPatient } from "../redux/features/ModalSlice";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("MOH-29493293hc34", "22/03/2023", "22/6/2023"),
  createData("MOH-29493293hc34", "22/03/2023", "22/6/2023"),
  createData("MOH-29493293hc34", "22/03/2023", "22/6/2023"),
  createData("MOH-29493293hc34", "22/03/2023", "22/6/2023"),
  createData("MOH-29493293hc34", "22/03/2023", "22/6/2023"),
  createData("MOH-29493293hc34", "22/03/2023", "22/6/2023"),
  createData("MOH-29493293hc34", "22/03/2023", "22/6/2023"),
];

export default function PatientsTable() {
  const dispatch = useDispatch();
  const { editPatient } = useSelector((store) => store.modals);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Orders">
        <TableHead className="bg-input">
          <TableRow>
            <TableCell align="center">
              <span className="text-lg font-bold">#</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">UPI code</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Last order</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Next order</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Action</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <span className="text-lblack font-bold">{i + 1}</span>
              </TableCell>
              <TableCell align="center">
                <span className="">{row.name}</span>
              </TableCell>
              <TableCell align="center">
                <span className="">{row.calories}</span>
              </TableCell>
              <TableCell align="center">
                <span className="">{row.fat}</span>
              </TableCell>
              <TableCell align="center">
                <button
                  onClick={() => dispatch(toggleEditPatient())}
                  className="w-[30px] h-[30px] rounded-full mx-auto flex justify-center items-center bg-lblack text-lg text-white cursor-pointer"
                >
                  <FiEdit />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalContainer open={editPatient}>
        <EditPatient dispatch={dispatch} />
      </ModalContainer>
    </TableContainer>
  );
}
