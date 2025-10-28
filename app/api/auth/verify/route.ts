// import { prisma } from "@/lib/prisma";
// import { NextRequest } from "next/server";

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const token = searchParams.get("token");

//   if (!token) {
//     return Response.redirect(
//       `${process.env.NEXT_PUBLIC_APP_URL}/auth?error=invalid_token`
//     );
//   }

//   try {
//     const verificationToken = await prisma.verificationToken.findUnique({
//       where: { token },
//       include: { user: true },
//     });

//     if (!verificationToken) {
//       return Response.redirect(
//         `${process.env.NEXT_PUBLIC_APP_URL}/auth?error=invalid_token`
//       );
//     }

//     if (verificationToken.expires < new Date()) {
//       return Response.redirect(
//         `${process.env.NEXT_PUBLIC_APP_URL}/auth?error=expired_token`
//       );
//     }

//     await prisma.user.update({
//       where: { id: verificationToken.userId },
//       data: { emailVerified: new Date() },
//     });

//     await prisma.verificationToken.delete({ where: { token } });

//     const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/credentials?email=${verificationToken.user.email}&verified=true`;

//     return Response.redirect(callbackUrl);
//   } catch (error) {
//     return Response.redirect(
//       `${process.env.NEXT_PUBLIC_APP_URL}/auth?error=server_error`
//     );
//   }
// }
