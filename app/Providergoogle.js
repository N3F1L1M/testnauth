"use client";

import { SessionProvider } from "next-auth/react";

export  function Providergoogle({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
