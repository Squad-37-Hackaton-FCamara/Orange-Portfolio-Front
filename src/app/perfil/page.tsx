"use client";

import ModalSucesso from "@/app/_helpers/modal_sucesso_edicao";
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
      <ModalSucesso isOpen={isOpen} setIsOpen={setIsOpen}>
        <p>oi</p>
      </ModalSucesso>
    </div>
  );
}

export default PerfilPage;
