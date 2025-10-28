// import { prisma } from "@/lib/prisma"
// import bcrypt from "bcrypt"
// import { Resend } from "resend"
// import VerificationEmail from "@/components/VerificationEmail"
// import { render } from "@react-email/render"
// import { NextRequest } from "next/server"

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(req: NextRequest) {
//   try {
//     const { name, email, password, confirmPassword } = await req.json()

//     if (!email || !password || !confirmPassword || !name) {
//       return Response.json({ error: "All fields are required" }, { status: 400 })
//     }

//     if (password !== confirmPassword) {
//       return Response.json({ error: "Passwords do not match" }, { status: 400 })
//     }

//     if (password.length < 8) {
//       return Response.json({ error: "Password must be at least 8 characters" }, { status: 400 })
//     }

//     const existingUser = await prisma.user.findUnique({ where: { email } })
//     if (existingUser) {
//       return Response.json({ error: "User already exists" }, { status: 400 })
//     }

//     const hashedPassword = await bcrypt.hash(password, 10)

//     const user = await prisma.user.create({
//       data: {
//         name,
//         email: email.toLowerCase(),
//         password: hashedPassword,
//       },
//     })

//     const token = crypto.randomUUID()
//     const expires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

//     await prisma.verificationToken.create({
//       data: {
//         identifier: user.email,
//         token,
//         expires,
//         userId: user.id,
//       },
//     })

//     const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/verify?token=${token}`

//     const emailHtml = await render(<VerificationEmail username={name} verificationUrl={verificationUrl} />)

//     await resend.emails.send({
//       from: "Learnify <no-reply@yourdomain.com>",
//       to: [user.email],
//       subject: "Verify your Learnify account",
//       html: emailHtml,
//     })

//     return Response.json({ success: true, message: "Check your email to verify your account" })
//   } catch (error) {
//     console.error("Signup error:", error)
//     return Response.json({ error: "Failed to send verification email" }, { status: 500 })
//   }
// }
