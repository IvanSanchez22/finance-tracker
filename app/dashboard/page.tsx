const summary = {
  income: 2850,
  expenses: 1735.42,
  balance: 1114.58,
};

const categories = [
  { name: "Vivienda", amount: 780 },
  { name: "Restaurantes", amount: 245.4 },
  { name: "Supermercado", amount: 312.15 },
  { name: "Transporte", amount: 96.8 },
  { name: "Suscripciones", amount: 41.07 },
  { name: "Otros", amount: 260 },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-semibold">Resumen mensual</h1>
          <p className="mt-3 text-slate-300">
            Vista inicial del panel. Más adelante conectaremos datos reales del
            banco y cálculos dinámicos.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Ingresos</p>
            <p className="mt-3 text-3xl font-semibold">
              {formatCurrency(summary.income)}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Gastos</p>
            <p className="mt-3 text-3xl font-semibold">
              {formatCurrency(summary.expenses)}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Balance neto</p>
            <p className="mt-3 text-3xl font-semibold">
              {formatCurrency(summary.balance)}
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Gastos por categoría</h2>

          <div className="mt-6 space-y-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3"
              >
                <span className="text-slate-200">{category.name}</span>
                <span className="font-medium">
                  {formatCurrency(category.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}