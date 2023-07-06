"use client";

import { Button } from "@mui/material";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>SciLive NextJS / Tailwind / MUI</h1>
      <Button
        variant="contained"
        className="bg-black text-3xl"
        sx={{ color: "primary.main" }}
      >
        Contained
      </Button>
    </main>
  );
}
