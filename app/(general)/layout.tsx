// para que next no utilice como ruta la carpeta que contiene una agrupación de páginas, se debe renombrar la carpeta a (general)
// El entre parentesis se utiliza para que next no utilice la carpeta como ruta

import { Navbar } from "../components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}
