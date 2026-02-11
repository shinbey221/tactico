import type { Metadata } from 'next';
import './globals.css';
import { getDictionary } from '@/src/dictionaries';

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'ja');

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    authors: [{ name: 'Tactico' }],
    viewport: 'width=device-width, initial-scale=1.0',
    openGraph: {
      type: 'website',
      url: 'https://tactico-board.example.com/',
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: [{
        url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: dict.metadata.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className="bg-gray-900 text-white min-h-screen">
        <div id="root" className="h-full w-full">{children}</div>
      </body>
    </html>
  );
}
