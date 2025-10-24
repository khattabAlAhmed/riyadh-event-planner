import { useTranslations } from "next-intl";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">{t('title')}</h1>
        <LanguageSwitch />
      </header>
      <main className="p-4">
        <h2 className="text-lg mb-4">{t('welcome')}</h2>
        <p>{t('test-text')}</p>
      </main>
    </div>
  );
}
