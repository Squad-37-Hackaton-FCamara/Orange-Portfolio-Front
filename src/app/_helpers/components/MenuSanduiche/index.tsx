import { Divider, Link, MenuItem, MenuList, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export function MenuSanduiche({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Paper>
      <MenuList>
        <MenuItem>
          <Link href="/meus-projetos" className="text-black text-opacity-87">
            Meus Projetos
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/descobrir" className="text-black text-opacity-87">
            Descobrir
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem disabled>Configurações</MenuItem>
      </MenuList>
    </Paper>
  );
}
