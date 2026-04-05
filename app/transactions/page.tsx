"use client";

import { useEffect, useState } from "react";

type Transaction = {
  id: string;
  transaction_date: string;
  description: string;
  category: string;
  amount: number;
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTransactions() {
      const res = await fetch("/api/transactions/list");
      const data = await res.json();

      if (data.ok) {
        setTransactions(data.transactions);
      }

      setLoading(false);
    }

    fetchTransactions();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-semibold mb-6">Transacciones</h1>

        {loading && <p>Cargando...</p>}

        {!loading && transactions.length === 0 && (
          <p>No hay transacciones todavía</p>
        )}

        {!loading && transactions.length > 0 && (
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
            <table className="min-w-full border-collapse">
              <thead className="bg-slate-950">
                <tr className="text-left text-sm text-slate-400">
                  <th className="px-4 py-4">Fecha</th>
                  <th className="px-4 py-4">Descripción</th>
                  <th className="px-4 py-4">Categoría</th>
                  <th className="px-4 py-4">Importe</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.id} className="border-t border-slate-800">
                    <td className="px-4 py-4">{t.transaction_date}</td>
                    <td className="px-4 py-4">{t.description}</td>
                    <td className="px-4 py-4">{t.category}</td>
                    <td className="px-4 py-4">
                      {formatCurrency(t.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}