import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center">
        <p className="text-xs text-zinc-600 text-center">
          © {year} — {t.footer.copy}{' '}
          <span className="text-zinc-400 font-medium">{t.footer.name}</span>
          {'. '}
          {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
