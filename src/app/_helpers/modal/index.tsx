import { CloseIcon } from "@/app/_helpers/svg/closeIcon";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
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
  isClosable,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isClosable?: boolean;
}) {
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Modal
      sx={
        !isClosable
          ? {}
          : {
              ".MuiBox-root": {
                paddingTop: 0.5,
                paddingRight: 0.5,
              },
            }
      }
      open={isOpen}
      onClose={handleClose}
    >
      {!isClosable ? (
        <Box
          sx={style}
          className="flex flex-col justify-center gap-6 items-center px-8 py-10"
        >
          {children}
        </Box>
      ) : (
        <Box sx={style}>
          <Box className="flex justify-end">
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <CloseIcon />
            </IconButton>
          </Box>
          {children}
        </Box>
      )}
    </Modal>
  );
}
