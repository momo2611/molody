"use client";

import { Toaster } from "react-hot-toast";

export default function ToastedProvider() {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
  );
}
