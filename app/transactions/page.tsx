const transactions = [
  {
    id: "1",
    date: "2026-04-01",
    description: "Nómina",
    category: "Ingresos",
    amount: 2450,
  },
  {
    id: "2",
    date: "2026-04-02",
    description: "Alquiler",
    category: "Vivienda",
    amount: -780,
  },
  {
    id: "3",
    date: "2026-04-03",
    description: "Mercadona",
    category: "Supermercado",
    amount: -68.45,
  },
  {
    id: "4",
    date: "2026-04-04",
    description: "Restaurante",
    category: "Ocio",
    amount: -34.2,
  },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export default function TransactionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Movimientos
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Transacciones</h1>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          <table className="min-w-full border-collapse">
            <thead className="bg-slate-950">
              <tr className="text-left text-sm text-slate-400">
                <th className="px-4 py-4 font-medium">Fecha</th>
                <th className="px-4 py-4 font-medium">Descripción</th>
                <th className="px-4 py-4 font-medium">Categoría</th>
                <th className="px-4 py-4 font-medium">Importe</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-t border-slate-800">
                  <td className="px-4 py-4 text-sm text-slate-300">
                    {transaction.date}
                  </td>
                  <td className="px-4 py-4">{transaction.description}</td>
                  <td className="px-4 py-4 text-slate-300">
                    {transaction.category}
                  </td>
                  <td className="px-4 py-4 font-medium">
                    {formatCurrency(transaction.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}