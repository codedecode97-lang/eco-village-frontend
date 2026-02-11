import { createContext, useContext } from "react";
import Lenis from "lenis";

export const LenisContext = createContext<{ lenis: Lenis | null }>({
  lenis: null,
});

export const useLenis = () => useContext(LenisContext);
