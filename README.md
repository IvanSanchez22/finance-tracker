# 💰 Finance Tracker

Aplicación web para analizar ingresos y gastos personales conectando cuentas bancarias mediante Open Banking.

## 🚀 Objetivo

Construir una herramienta sencilla pero potente que permita:

- Conectar una cuenta bancaria (ej. Santander)
- Sincronizar transacciones automáticamente
- Visualizar ingresos, gastos y balance mensual
- Analizar hábitos de consumo por categorías
- Tener una visión clara del flujo de dinero

---

## 🧱 Stack tecnológico

- **Frontend & Backend**: Next.js (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Base de datos**: Supabase (PostgreSQL)
- **Open Banking**: (pendiente) GoCardless / Tink
- **Deploy**: Vercel

---

## 📂 Estructura del proyecto

```bash
app/
  api/                 # endpoints backend (Next.js)
  dashboard/           # vista principal
  connect-bank/        # conexión bancaria
  transactions/        # listado de movimientos

components/            # UI reutilizable
lib/                   # lógica y servicios
types/                 # tipos TypeScript