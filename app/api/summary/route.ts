import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    month: "2026-04",
    income: 2850,
    expenses: 1735.42,
    balance: 1114.58,
  });
}