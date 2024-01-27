import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Dispatch, SetStateAction } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ComponentModal({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={style}
        className="flex flex-col justify-center gap-6 items-center px-8 py-10"
      >
        {children}
      </Box>
    </Modal>
  );
}
