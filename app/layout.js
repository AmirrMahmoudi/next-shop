import Header from "@/components/layout/Header";
import BootstrapClient from "@/components/libraries/Bootstrap";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
