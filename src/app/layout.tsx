import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Container } from "@mui/material";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test",
  description: "desc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Container>
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
