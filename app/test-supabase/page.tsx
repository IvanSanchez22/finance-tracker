"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TestSupabasePage() {
  const [message, setMessage] = useState("Sin comprobar");

  async function testConnection() {
    try {
      const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .limit(1);

      if (error) {
        setMessage(`Error: ${error.message}`);
        return;
      }

      setMessage(`Conexión OK. Filas recibidas: ${data?.length ?? 0}`);
    } catch (err) {
      setMessage(
        err instanceof Error ? err.message : "Error desconocido al conectar"
      );
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-semibold">Test Supabase</h1>
        <p className="mt-3 text-slate-300">
          Esta página sirve para comprobar que la conexión con Supabase está
          funcionando correctamente.
        </p>

        <button
          onClick={testConnection}
          className="mt-6 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950"
        >
          Probar conexión
        </button>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300">
          {message}
        </div>
      </div>
    </main>
  );
}