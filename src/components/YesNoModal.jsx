import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};

export default function YesNoModal({
  onYes,
  onNo,
  isModalVisible,
  setIsModalVisible,
  title,
  text,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
        }}
      >
        <Box sx={style} className="bg-slate-200 rounded-lg">
          <p className="font-bold text-lg flex justify-start">
            {" "}
            {title ? title : "Are You Sure?"}
          </p>
          <p className="mb-2">{text}</p>
          <div className="flex justify-center gap-5">
            <button
              onClick={onNo}
              className="bg-red-900 text-red-400 uppercase font-semibold text-md py-1 px-2 rounded-lg flex justify-center items-center "
            >
              No
            </button>
            <button
              onClick={onYes}
              className="bg-green-900 text-green-400 uppercase font-semibold text-md py-1 px-2 rounded-lg flex justify-center items-center "
            >
              Yes
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
