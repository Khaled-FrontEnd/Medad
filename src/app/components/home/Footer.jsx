// components/Footer.jsx
import Link from 'next/link'

export default function Footer() {
  const links = [
    { href: '#', label: 'عن مِداد' },
    { href: '#', label: 'الخصوصية' },
    { href: '#', label: 'الشروط والأحكام' },
    { href: '#', label: 'الأسئلة الشائعة' },
    { href: '#', label: 'الدعم الفني' },
  ]

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20" dir='ltr'>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center px-margin-desktop py-6 max-w-container-max mx-auto gap-gutter">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <Link
            href="/"
            className="font-headline-md text-headline-lg font-bold text-primary"
          >
            مِداد
          </Link>
          <div className="flex flex-wrap justify-center gap-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant opacity-70">
          © {new Date().getFullYear()} منصة مِداد التعليمية. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}