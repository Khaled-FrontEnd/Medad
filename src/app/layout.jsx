import './globals.css'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans-arabic',
})

export const metadata = {
  title: 'مِداد | منصة التعليم الذكي',
  description: 'استمتع بتجربة تعليمية ذكية تعتمد على أحدث التقنيات لمساعدتك في بناء مستقبلك المهني',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`scroll-smooth ${ibmPlexSansArabic.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-surface text-on-surface selection:bg-primary-container selection:text-white">
        {children}
      </body>
    </html>
  )
}