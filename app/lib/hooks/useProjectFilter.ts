'use client';
import { useEffect } from 'react';
import anime from 'animejs';

export function useProjectFilter() {
  useEffect(() => {
    const searchBox = document.getElementById('project-search') as HTMLInputElement;
    const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
    const cards = document.querySelectorAll<HTMLDivElement>('.project-card');

    const apply = () => {
      const term = searchBox.value.toLowerCase();
      const active = document.querySelector<HTMLButtonElement>('.filter-btn.active')?.dataset.filter || 'all';

      cards.forEach((card) => {
        const tags = (card.dataset.tags || '').toLowerCase();
        const title = card.querySelector('h3')!.textContent!.toLowerCase();
        const matchSearch = !term || title.includes(term) || tags.includes(term);
        const matchFilter = active === 'all' || tags.includes(active);
        const show = matchSearch && matchFilter;

        if (show) {
          card.style.display = 'block';
          anime({ targets: card, opacity: [0, 1], translateY: [20, 0], duration: 300, easing: 'easeOutCubic' });
        } else {
          anime({ targets: card, opacity: 0, translateY: -20, duration: 200, easing: 'easeInCubic', complete: () => (card.style.display = 'none') });
        }
      });
    };

    searchBox.addEventListener('input', apply);
    filterBtns.forEach((btn) => btn.addEventListener('click', () => { filterBtns.forEach((b) => b.classList.remove('active')); btn.classList.add('active'); apply(); }));
  }, []);
}