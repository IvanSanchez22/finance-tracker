"use client";

import { useState } from "react";

export default function AddTransactionPage() {
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/transactions/create", {
      method: "POST",
      body: JSON.stringify({
        date: "2026-04-05",
        description: "Cena con amigos",
        category: "Ocio",
        amount: -45.5,
      }),
    });

    const data = await res.json();

    if (data.ok) {
      setMessage("Transacción guardada correctamente");
    } else {
      setMessage(`Error: ${data.error}`);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-semibold">Añadir transacción</h1>

        <button
          onClick={handleSubmit}
          className="mt-6 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950"
        >
          Insertar transacción de prueba
        </button>

        {message && (
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}