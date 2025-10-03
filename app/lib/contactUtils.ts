export async function submitContact(data: Record<string, any>) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to send');
}

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = (event!.target as HTMLButtonElement);
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    btn.classList.add('text-green-400');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('text-green-400'); }, 2000);
  });
}