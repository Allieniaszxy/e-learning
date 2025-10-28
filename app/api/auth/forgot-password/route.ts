// import { prisma } from "@/lib/prisma"
// import { Resend } from "resend"
// import PasswordResetEmail from "@/components/PasswordResetEmail"
// import { render } from "@react-email/render"
// import { NextRequest } from "next/server"

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(req: NextRequest) {
//   try {
//     const { email } = await req.json()

//     if (!email) {
//       return Response.json({ error: "Email is required" }, { status: 400 })
//     }

//     const user = await prisma.user.findUnique({ where: { email } })
//     if (!user) {
//       return Response.json({ success: true, message: "If your email is registered, you'll receive a reset link." })
//     }

//     const recent = await prisma.passwordResetToken.findFirst({
//       where: {
//         userId: user.id,
//         createdAt: { gte: new Date(Date.now() - 5 * 60 * 1000) },
//       },
//     })

//     if (recent) {
//       return Response.json({ error: "Too many requests. Try again later." }, { status: 429 })
//     }

//     const token = crypto.randomUUID()
//     const expires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

//     await prisma.passwordResetToken.create({
//       data: { token, userId: user.id, expires },
//     })

//     const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`

//     const emailHtml = await render(<PasswordResetEmail username={user.name || "User"} resetUrl={resetUrl} />)

//     await resend.emails.send({
//       from: "Learnify <no-reply@yourdomain.com>",
//       to: [user.email],
//       subject: "Reset your Learnify password",
//       html: emailHtml,
//     })

//     return Response.json({ success: true, message: "Reset link sent" })
//   } catch (error) {
//     console.error("Forgot password error:", error)
//     return Response.json({ error: "Failed to send reset link" }, { status: 500 })
//   }
// }
