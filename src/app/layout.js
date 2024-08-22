import { Background } from "@/components/background/Background";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContex";
import { AccountProvider } from "@/context/ProfileContext";
import { TransactionProvider } from "@/context/transactionContext";
import { CardsProvider } from "@/context/CardContext";
import { ServiceProvider } from "@/context/ServicesContext";


export const metadata = {
  title: "Digital Money App",
  description: "Desafio Final Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-lime-800 w-full h-screen flex items-center">
        <AuthProvider>
          <AccountProvider>
            <CardsProvider >
            <TransactionProvider>
              <ServiceProvider>
            <main className="w-full max-w-[1920px] mx-auto  rounded-none xl:rounded-xl h-screen lg:h-[calc(100vh-30px)] relative overflow-hidden overflow-y-scroll z-50">
              {children}             
            </main>
            </ServiceProvider>
            </TransactionProvider>
            </CardsProvider>
          </AccountProvider>
        </AuthProvider>
        <Background />
      </body>
    </html>
  );
}
