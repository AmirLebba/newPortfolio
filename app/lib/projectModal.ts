export  async function openProjectModal(projectId: string) {
  const modal = document.getElementById('project-modal') as HTMLDivElement;
  const title = document.getElementById('modal-title') as HTMLHeadingElement;
  const content = document.getElementById('modal-content') as HTMLDivElement;
  const data = (await import('@/app/lib/projectData')).projectData[projectId];
  if (!data) return;

  title.textContent = data.title;
  content.innerHTML = `
    <div class="mb-6"><p class="text-lg text-gray-300 mb-4">${data.description}</p></div>
    <div class="mb-6"><h3 class="text-xl font-bold text-white mb-3">Key Features</h3>
      <ul class="grid md:grid-cols-2 gap-2">
        ${data.features.map((f) => `<li class="text-gray-300 flex items-center"><span class="text-green-400 mr-2">✓</span>${f}</li>`).join('')}
      </ul>
    </div>
    <div class="mb-6"><h3 class="text-xl font-bold text-white mb-3">Technology Stack</h3>
      <div class="flex flex-wrap gap-2">${data.techStack.map((t) => `<span class="tech-tag">${t}</span>`).join('')}</div>
    </div>
    <div class="mb-6"><h3 class="text-xl font-bold text-white mb-3">Challenges & Solutions</h3>
      <p class="text-gray-300 mb-2"><strong>Challenge:</strong> ${data.challenges}</p>
      <p class="text-gray-300"><strong>Solution:</strong> ${data.solution}</p>
    </div>
    <div class="flex space-x-4">
      <a href="#" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300">View Live Demo</a>
      <a href="#" className="px-6 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold transition-all duration-300">View Code</a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

export function closeProjectModal() {
  const modal = document.getElementById('project-modal') as HTMLDivElement;
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}
export function initProjectModal() {
  const modal = document.getElementById('project-modal') as HTMLDivElement;
  const closeBtn = document.getElementById('modal-close-btn') as HTMLButtonElement;
  modal.addEventListener('click', (e) => e.target === modal && closeProjectModal());
  closeBtn.addEventListener('click', closeProjectModal);
}
