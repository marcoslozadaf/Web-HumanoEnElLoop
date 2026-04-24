export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || !email.includes("@")) {
    return Response.json({ error: "Email inválido" }, { status: 400 })
  }

  const res = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
    method: "POST",
    body: JSON.stringify({ email }),
  })

  if (!res.ok) {
    return Response.json({ error: "Error al guardar" }, { status: 500 })
  }

  return Response.json({ success: true })
}
