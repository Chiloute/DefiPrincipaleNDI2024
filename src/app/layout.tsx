import "./globals.css";

export const metadata = {
  title: "Océan et Corps Humain",
  description: "Explorez la relation entre l'océan et le corps humain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
