import "./globals.css";


export const metadata = {
  title: "Digital Money App",
  description: "Desafio Final Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body >
        {children}
      </body>
    </html>
  );
}
