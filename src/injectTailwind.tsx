import { PropsWithChildren } from "react";
import { StyledEngineProvider } from "@mui/material";

export default function InjectTailwind({ children }: PropsWithChildren) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
