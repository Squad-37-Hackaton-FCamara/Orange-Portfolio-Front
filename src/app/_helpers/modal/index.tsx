import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Dispatch, SetStateAction } from "react";
import { useWindowDimensions } from "@/services/window_size";

export default function ComponenteModal({
  add_edit,
  children,
  isOpen,
  setIsOpen,
}: {
  add_edit: boolean;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  function handleClose() {
    setIsOpen(false);
  }

  const { width } = useWindowDimensions();

  const style = {
    position: "absolute" as "absolute",
    top: width < 1200 && add_edit ? "70%" : "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal className="overflow-auto" open={isOpen} onClose={handleClose}>
      <Box sx={style} className="flex flex-col gap-6 items-center px-8 py-10">
        {children}
      </Box>
    </Modal>
  );
}
