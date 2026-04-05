export default function ConnectBankPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Open Banking
        </p>

        <h1 className="mt-2 text-3xl font-semibold">Conectar banco</h1>

        <p className="mt-4 text-slate-300">
          Aquí integraremos más adelante el proveedor de open banking para
          conectar tu cuenta y sincronizar movimientos de forma segura.
        </p>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
              <p className="font-medium">Estado actual</p>
              <p className="mt-2 text-sm text-slate-400">
                Todavía no hay ninguna conexión bancaria configurada.
              </p>
            </div>

            <button
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:opacity-90"
              type="button"
            >
              Próximamente: conectar Santander
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}