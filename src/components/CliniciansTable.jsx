import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FiEdit } from "react-icons/fi";
import { CgTrash } from "react-icons/cg";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "John Doe",
    "+647382047287",
    "johndoe@email.com",
    "JKUAT Hospital"
  ),
  createData(
    "John Doe",
    "+647382047287",
    "johndoe@email.com",
    "JKUAT Hospital"
  ),
  createData(
    "John Doe",
    "+647382047287",
    "johndoe@email.com",
    "JKUAT Hospital"
  ),
  createData(
    "John Doe",
    "+647382047287",
    "johndoe@email.com",
    "JKUAT Hospital"
  ),
  createData(
    "John Doe",
    "+647382047287",
    "johndoe@email.com",
    "22/03/2023",
    "delivered"
  ),
];

export default function CliniciansTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Orders">
        <TableHead className="bg-input">
          <TableRow>
            <TableCell align="center">
              <span className="text-lg font-bold">#</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Name</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Mobile</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Email</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Facility</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Actions</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <div className="w-[40px] h-[40px] bg-input overflow-hidden rounded-full mx-auto">
                  <img
                    src="avatar.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
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
                <span>JKUAT Hospital</span>
              </TableCell>
              <TableCell align="center">
                <div className="flex items-center gap-3 justify-center">
                  <button className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-lblack text-lg text-white cursor-pointer">
                    <FiEdit />
                  </button>
                  <button className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-red text-lg text-white cursor-pointer">
                    <CgTrash />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
