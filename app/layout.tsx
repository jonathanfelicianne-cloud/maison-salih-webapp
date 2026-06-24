export const metadata = {
  title: 'Maison Salih',
  description: 'Traiteur turc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
