"use client";

import PerfilPageLayout from "@/app/perfil/layout";
import Modal from "@/app/_helpers/modal";
import { Button } from "@mui/material";
import { useState } from "react";

function PerfilPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<
    "editado" | "adicionado" | "deletado" | ""
  >("");

  return (
    <PerfilPageLayout>
      <div className="flex flex-col gap-4">
        Perfil
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setIsOpen(true)}
          className="text-black"
        >
          <p>Abrir modal</p>
        </Button>
        <button onClick={() => setIsOpen(true)}>abrir modal</button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <p>oi</p>
        </Modal>
      </div>
    </PerfilPageLayout>
  );
}

export default PerfilPage;
