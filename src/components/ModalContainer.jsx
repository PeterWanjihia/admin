import Modal from "@mui/material/Modal";

function ModalContainer({ children, open }) {
  return <Modal open={open}>{children}</Modal>;
}

export default ModalContainer;
