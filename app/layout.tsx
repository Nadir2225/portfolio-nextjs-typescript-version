import type { Metadata } from "next";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import { LoadingProvider } from "./context/loadingcontext";


export const metadata: Metadata = {
  title: "Nadir El Ouadghiri",
  description: "my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <LoadingProvider> */}
          {children}
        {/* </LoadingProvider> */}
      </body>
    </html>
  );
}
