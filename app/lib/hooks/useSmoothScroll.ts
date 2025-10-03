'use client';
import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const tgt = document.querySelector<HTMLElement>(a.getAttribute('href')!);
        tgt?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      })
    );
  }, []);
}