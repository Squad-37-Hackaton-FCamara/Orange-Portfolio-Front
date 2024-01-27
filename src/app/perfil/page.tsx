"use client";

import Modal from "@/app/_helpers/modal";
import { useState } from "react";

function PerfilPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<
    "editado" | "adicionado" | "deletado" | ""
  >("");

  return (
    <div className="flex flex-col gap-4">
      Perfil
      <button onClick={() => setIsOpen(true)}>abrir modal</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <p>oi</p>
      </Modal>
    </div>
  );
}

export default PerfilPage;
