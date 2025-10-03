'use client';
import { useEffect } from 'react';

export function useFormHandler() {
  useEffect(() => {
    const forms = document.querySelectorAll<HTMLFormElement>('form');
    forms.forEach((form) => {
      const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select');
      inputs.forEach((input) => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => input.classList.contains('error') && validateField(input));
      });
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        inputs.forEach((inp) => { if (!validateField(inp)) valid = false; });
        if (valid) submitForm(form);
      });
    });

    /* file-upload drag-drop */
    document.querySelectorAll<HTMLInputElement>('input[type="file"]').forEach((input) => {
      const zone = input.parentElement!;
      zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
      zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        if (e.dataTransfer?.files?.length) input.files = e.dataTransfer.files;
      });
    });
  }, []);
}

function validateField(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): boolean {
  const val = field.value.trim();
  let ok = true;
  let msg = '';
  if (field.hasAttribute('required') && !val) { ok = false; msg = 'Required'; }
  if (field.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { ok = false; msg = 'Invalid email'; }
  showFieldValidation(field, ok, msg);
  return ok;
}

function showFieldValidation(field: HTMLElement, ok: boolean, msg: string) {
  field.classList.toggle('error', !ok);
  field.classList.toggle('valid', ok);
  let err = field.parentElement!.querySelector('.error-message') as HTMLElement;
  if (!ok) {
    if (!err) { err = document.createElement('div'); err.className = 'error-message text-red-400 text-sm mt-1'; field.parentElement!.appendChild(err); }
    err.textContent = msg;
  } else err?.remove();
}

function submitForm(form: HTMLFormElement) {
  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const orig = btn.textContent!;
  btn.textContent = 'Sending...'; btn.disabled = true;
  setTimeout(() => {
    btn.textContent = orig; btn.disabled = false; form.reset();
    const success = document.createElement('div'); success.className = 'form-success bg-green-500 text-white p-4 rounded-lg mb-4'; success.textContent = 'Message sent! I’ll get back to you soon.'; form.insertBefore(success, form.firstChild); setTimeout(() => success.remove(), 5000);
  }, 2000);
}