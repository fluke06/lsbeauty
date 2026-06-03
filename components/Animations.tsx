'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Animations() {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        // --- Hero entrance ---
        gsap.fromTo(
          '.ho-left > *',
          { opacity: 0, y: 28, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, stagger: 0.11, ease: 'power3.out', delay: 0.08 }
        )
        gsap.fromTo(
          '.ho-ovalwrap',
          { opacity: 0, scale: 0.88, filter: 'blur(12px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out', delay: 0.18 }
        )
        gsap.fromTo(
          '.ho-right > *',
          { opacity: 0, x: 22 },
          { opacity: 1, x: 0, duration: 0.8, stagger: 0.14, ease: 'power3.out', delay: 0.32 }
        )

        // --- Section reveals via ScrollTrigger ---
        gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.72,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          )
        })

        // --- Watermark parallax ---
        gsap.utils.toArray<HTMLElement>('.wm').forEach((wm) => {
          gsap.fromTo(
            wm,
            { yPercent: -14 },
            {
              yPercent: 14,
              ease: 'none',
              scrollTrigger: { trigger: wm.closest('section') ?? wm, scrub: 1.2 },
            }
          )
        })

        // --- Image parallax on rsn rows and experts ---
        gsap.utils.toArray<HTMLElement>('.rsn-media .zoom, .experts-media .zoom').forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: 'none',
              scrollTrigger: {
                trigger: img.closest('.rsn, .experts-media') ?? img,
                scrub: 1.8,
              },
            }
          )
        })

        // --- Rec card parallax (arch images in Recommend section) ---
        gsap.utils.toArray<HTMLElement>('.rec-bg').forEach((bg) => {
          gsap.fromTo(
            bg,
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: 'none',
              scrollTrigger: { trigger: bg.closest('.rec') ?? bg, scrub: 1.5 },
            }
          )
        })

      })

      return () => ctx.revert()
    })

    // Reduced-motion fallback: make all reveals immediately visible
    mm.add('(prefers-reduced-motion: reduce)', () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        (el as HTMLElement).style.opacity = '1'
        ;(el as HTMLElement).style.transform = 'none'
      })
    })

    return () => mm.revert()
  }, [])

  return null
}
