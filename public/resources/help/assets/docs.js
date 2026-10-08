(() => {
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.addEventListener('click', () => box.classList.remove('open'));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') box.classList.remove('open'); });
  document.body.appendChild(box);

  document.querySelectorAll('.shot .frame').forEach((frame) => {
    frame.addEventListener('click', () => {
      box.replaceChildren(frame.cloneNode(true));
      box.classList.add('open');
    });
  });

  const links = [...document.querySelectorAll('.toc a')];
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.remove('active'));
      byId.get(entry.target.id)?.classList.add('active');
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  document.querySelectorAll('section.chapter[id]').forEach((s) => observer.observe(s));

  document.querySelectorAll('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));
})();

window.addEventListener('beforeprint', () => {
  document.querySelectorAll('.faq details').forEach((d) => { d.dataset.wasOpen = d.open; d.open = true; });
});
window.addEventListener('afterprint', () => {
  document.querySelectorAll('.faq details').forEach((d) => { d.open = d.dataset.wasOpen === 'true'; });
});
