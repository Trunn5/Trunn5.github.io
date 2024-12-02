// app/layout.tsx
import './globals.css';
import Base from "@/app/base";


export const metadata = {
  title: 'Моё портфолио',
  description: 'Описание и полезные ссылки',
};

export default function RootLayout({children}: { children: React.ReactNode }) {

  return (
    <html lang="ru">
    <body>
    <Base>
      {children}
    </Base>
    </body>
    </html>
  );
}
