import { Button } from "@mui/material";

export function BotaoPadrao({
  disabled,
  children,
}: {
  disabled?: boolean;
  children: string;
}) {
  return (
    <Button
      disabled={disabled}
      variant="contained"
      color="secondary"
      className="bg-color-secondary-100 text-color-neutral-60" // disabled:bg-black disabled:opacity-12 disabled:text-black"
    >
      {children}
    </Button>
  );
}
