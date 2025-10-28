// import {
//   Body,
//   Button,
//   Container,
//   Head,
//   Heading,
//   Html,
//   Img,
//   Preview,
//   Section,
//   Text,
// } from "@react-email/components";

// interface VerificationEmailProps {
//   username: string;
//   verificationUrl: string;
// }

// export default function VerificationEmail({
//   username,
//   verificationUrl,
// }: VerificationEmailProps) {
//   return (
//     <Html>
//       <Head />
//       <Preview>Verify your email for Learnify</Preview>
//       <Body style={main}>
//         <Container style={container}>
//           <Img
//             src={`${process.env.NEXT_PUBLIC_APP_URL}/logo.svg`}
//             width="48"
//             height="48"
//             alt="Learnify"
//             style={logo}
//           />
//           <Heading style={heading}>Welcome, {username}!</Heading>
//           <Section style={body}>
//             <Text style={text}>
//               Please click the button below to verify your email address and
//               activate your account.
//             </Text>
//             <Button href={verificationUrl} style={button}>
//               Verify Email
//             </Button>
//             <Text style={small}>
//               Or copy and paste this link:
//               <br />
//               <a href={verificationUrl} style={link}>
//                 {verificationUrl}
//               </a>
//             </Text>
//           </Section>
//           <Text style={footer}>
//             © 2025 Learnify. All rights reserved. // Updated year based on
//             current date
//           </Text>
//         </Container>
//       </Body>
//     </Html>
//   );
// }

// // Styles (same as before)
// const main = { backgroundColor: "#f6f9fc", fontFamily: "Arial, sans-serif" };
// // ... (rest of styles from previous response)
