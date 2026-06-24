const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navLinks.classList.toggle('is-open', !open);
  });
}

const clock = document.querySelector('[data-clock]');
if (clock) {
  const updateClock = () => {
    const value = new Intl.DateTimeFormat('ko-KR', {
      timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    }).format(new Date());
    clock.textContent = `${value} KST`;
  };
  updateClock();
  window.setInterval(updateClock, 1000);
}

const searchForm = document.querySelector('[data-search-form]');
const searchInput = document.querySelector('[data-search-input]');
const posts = [...document.querySelectorAll('[data-search-results] [data-post]')];
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const resultCounts = [...document.querySelectorAll('[data-result-count]')];
const emptyState = document.querySelector('[data-empty-state]');
let activeFilter = 'all';

const normalize = (value) => value.toLocaleLowerCase('ko-KR').trim();

function filterPosts() {
  if (!searchInput || posts.length === 0) return;
  const query = normalize(searchInput.value);
  let visible = 0;

  posts.forEach((post) => {
    const haystack = normalize(`${post.dataset.title || ''} ${post.dataset.description || ''} ${post.dataset.tags || ''}`);
    const tags = normalize(post.dataset.tags || '');
    const matchesQuery = !query || haystack.includes(query);
    const matchesFilter = activeFilter === 'all' || tags.includes(activeFilter);
    const show = matchesQuery && matchesFilter;
    post.hidden = !show;
    if (show) visible += 1;
  });

  resultCounts.forEach((node) => { node.textContent = String(visible); });
  if (emptyState) emptyState.hidden = visible !== 0;
  const url = new URL(window.location.href);
  query ? url.searchParams.set('q', searchInput.value.trim()) : url.searchParams.delete('q');
  activeFilter !== 'all' ? url.searchParams.set('tag', activeFilter) : url.searchParams.delete('tag');
  window.history.replaceState({}, '', url);
}

if (searchForm && searchInput) {
  const params = new URLSearchParams(window.location.search);
  searchInput.value = params.get('q') || '';
  activeFilter = normalize(params.get('tag') || 'all');
  filterButtons.forEach((button) => button.classList.toggle('is-selected', button.dataset.filter === activeFilter));
  searchForm.addEventListener('submit', (event) => { event.preventDefault(); filterPosts(); });
  searchInput.addEventListener('input', filterPosts);
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter || 'all';
    filterButtons.forEach((item) => item.classList.toggle('is-selected', item === button));
    filterPosts();
  }));
  filterPosts();
}

