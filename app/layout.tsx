import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { ChatBot } from '@/components/chat-bot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Haussmann Sols Résine - Sols en résine et tapis de pierre',
  description: 'Spécialiste des sols en résine et tapis de pierre pour particuliers et professionnels',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <ChatBot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}