/* eslint-disable */
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreatePayment({ setBooks }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-blue-500 w-20 h-10 rounded-md text-white font-bold hover:bg-blue-700 transition-all ease-in-out duration-300"
      >
        Create
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input type="file" name="" id="" />
          <input type="text" placeholder="ราคา" />
          <input type="text" placeholder="ขนส่ง" />
          <input type="text" placeholder="เลขพัสดุ" />
        </Box>
      </Modal>
    </div>
  );
}
