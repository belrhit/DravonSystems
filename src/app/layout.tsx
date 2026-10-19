import type { Metadata } from 'next';
import './globals.css';
import { FluentClientProvider } from './registry';

export const metadata: Metadata = {
  title: "Dravon Systems | L'ingénierie logicielle qui orchestre votre croissance",
  description:
    "Dravon Systems conçoit des applications métiers sur-mesure (ERP, CRM) et déploie un écosystème de solutions SaaS prêtes à l'emploi pour digitaliser et propulser votre performance.",
  keywords: [
    'Développement de logiciels sur-mesure',
    'Solutions SaaS pour entreprises',
    'ERP sur-mesure',
    'CRM sur-mesure',
    'Dravon Systems',
    'Ingénierie logicielle',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <FluentClientProvider>{children}</FluentClientProvider>
      </body>
    </html>
  );
}
