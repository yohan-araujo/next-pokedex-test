import './global.css';

export const metadata = {
  title: 'Pokedex - Test',
  description: 'Teste para estágio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
