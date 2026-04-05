import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300">
            Finance Tracker
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Controla tus gastos e ingresos de forma simple.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Proyecto personal para conectar tu banco, sincronizar movimientos y
            ver un resumen mensual claro de ingresos, gastos y balance neto.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:opacity-90"
            >
              Ir al dashboard
            </Link>

            <Link
              href="/connect-bank"
              className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-900"
            >
              Conectar banco
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}