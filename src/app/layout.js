import NavBarComponent from "@/components/navbar";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContex";


export const metadata = {
  title: "Digital Money App",
  description: "Desafio Final Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-lime-800 w-full h-screen flex items-center">
        <AuthProvider>
          <main className="w-full max-w-[1920px] mx-auto rounded-xl h-[calc(100vh-30px)] bg-lime-200 relative overflow-hidden overflow-y-scroll">
            {children}
            <NavBarComponent />
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
