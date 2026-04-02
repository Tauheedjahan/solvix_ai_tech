import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    const els = document.querySelectorAll('.rv')
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  })
}
