import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ReduxProvider } from '../app/lib/provider'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata = {
  title: "Mãos Solidárias",
  description: "Projeto Mãos Solidárias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="container">
        <ReduxProvider>
          <Navbar/>
            {children}    
          <Footer/>
        </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
