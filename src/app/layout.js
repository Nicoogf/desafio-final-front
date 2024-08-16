import NavBarComponent from "@/components/navbar";
import "./globals.css";


export const metadata = {
  title: "Digital Money App",
  description: "Desafio Final Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-lime-800 w-full h-screen flex items-center">
        <main className="w-full max-w-[1920px] mx-auto rounded-xl h-[calc(100vh-30px)] bg-lime-200 relative">
        {children}
        <NavBarComponent/>
        </main>       
      </body>
    </html>
  );
}
