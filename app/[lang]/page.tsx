import { TacticsBoard } from '@/src/components/TacticsBoard';
import { getDictionary } from '@/src/dictionaries';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'ja');

  return (
    <TacticsBoard dict={dict.ui} />
  );
}
