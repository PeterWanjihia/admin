import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditOrder from "./EditOrder";
import { FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { toggleOrder } from "../redux/features/ModalSlice";
import ModalContainer from "./ModalContainer";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("22/03/2023 - 10:00 PM", "NJSA398CDI9", 330, "", "delivered"),
  createData("22/03/2023 - 10:00 PM", "NJSA398CDI9", 330, "", "pending"),
  createData("22/03/2023 - 10:00 PM", "NJSA398CDI9", 330, "", "delivered"),
  createData("22/03/2023 - 10:00 PM", "NJSA398CDI9", 330, "", "pending"),
  createData("22/03/2023 - 10:00 PM", "NJSA398CDI9", 330, "", "delivered"),
];

const getStyles = (i) => {
  const isEven = i % 2 === 0;
  if (isEven) return "bg-[#FCF4C7] text-[#854E23] px-4 p-2 rounded-md";
  return "bg-[#C8F7DF] text-[#559982] px-4 p-2 rounded-md";
};

export default function OrdersTable() {
  const { editOrder } = useSelector((store) => store.modals);
  const dispatch = useDispatch();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Orders">
        <TableHead className="bg-input">
          <TableRow>
            <TableCell align="center">
              <span className="text-lg font-bold">#</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Date</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Order ID</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Delivery fee</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Deliver By</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Status</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg font-bold">Actions</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            const handleToggle = () => {
              dispatch(toggleOrder());
            };
            return (
              <>
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
                    <span className="">Ksh {row.fat}</span>
                  </TableCell>
                  <TableCell align="center">
                    <span>30/03/2023</span>
                  </TableCell>
                  <TableCell align="center">
                    <span className={getStyles(i)}>Delivered</span>
                  </TableCell>
                  <TableCell align="center">
                    <button
                      onClick={() => handleToggle(i)}
                      className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-lblack text-lg text-white cursor-pointer mx-auto"
                    >
                      <FiEdit />
                    </button>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
      <ModalContainer open={editOrder}>
        <EditOrder />
      </ModalContainer>
    </TableContainer>
  );
}
