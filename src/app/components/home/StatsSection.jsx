// components/StatsSection.jsx
'use client'

import { useEffect, useRef } from 'react'

export default function StatsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const counters = document.querySelectorAll('.counter')
    const speed = 200

    const animateCounter = (counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText.replace(/[^0-9]/g, '')
        const increment = target / speed

        if (count < target) {
          const nextValue = Math.ceil(count + increment)
          const suffix = target === 50 ? 'K+' : target === 98 ? '%' : '+'
          counter.innerText = nextValue + suffix
          setTimeout(updateCount, 1)
        } else {
          const suffix = target === 50 ? 'K+' : target === 98 ? '%' : '+'
          counter.innerText = target + suffix
        }
      }
      updateCount()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const countersInView = entry.target.querySelectorAll('.counter')
            countersInView.forEach(animateCounter)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { target: 50, label: 'طالب مستفيد', suffix: 'K+' },
    { target: 200, label: 'دورة تدريبية', suffix: '+' },
    { target: 150, label: 'معلم خبير', suffix: '+' },
    { target: 98, label: 'نسبة النجاح', suffix: '%' },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div 
          ref={sectionRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-12 rounded-3xl bg-surface-container-low border border-outline-variant/30"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div 
                className="font-headline-xl text-headline-xl text-primary counter" 
                data-target={stat.target}
              >
                0
              </div>
              <div className="font-label-md text-label-md text-on-surface-variant">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}