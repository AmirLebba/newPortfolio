export function initFilters() {
  const searchBox = document.getElementById('project-search') as HTMLInputElement;
  const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
  const grid = document.getElementById('projects-grid') as HTMLDivElement;

  const applyFilter = () => {
    const term = searchBox.value.toLowerCase();
    const active = document.querySelector<HTMLButtonElement>('.filter-btn.active')?.dataset.filter || 'all';

    document.querySelectorAll<HTMLDivElement>('.project-card').forEach((card) => {
      const tags = (card.dataset.tags || '').toLowerCase();
      const title = card.querySelector('h3')!.textContent!.toLowerCase();
      const matchesSearch = title.includes(term) || tags.includes(term);
      const matchesFilter = active === 'all' || tags.includes(active);
      card.style.display = matchesSearch && matchesFilter ? 'block' : 'none';
    });
  };

  searchBox.addEventListener('input', applyFilter);

  filterBtns.forEach((btn) =>
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter();
    })
  );
}