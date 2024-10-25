document.addEventListener('DOMContentLoaded', () => {
  const counterValue = document.getElementById('counter-value');
  const incrementBtn = document.getElementById('increment-btn');
  const decrementBtn = document.getElementById('decrement-btn');
  const counterTitle = document.getElementById('counter-title');
  const lastUpdated = document.getElementById('last-updated');

  const savedTitle = localStorage.getItem('counterTitle');
  if (savedTitle) {
    counterTitle.textContent = savedTitle;
  }

  const storedValue = localStorage.getItem('counterValue');
  if (storedValue !== null) {
    counterValue.textContent = storedValue;
  }

  const savedLastUpdated = localStorage.getItem('lastUpdated');
  if (savedLastUpdated) {
    lastUpdated.textContent = `Last updated: ${savedLastUpdated}`;
  }

  incrementBtn.addEventListener('click', () => {
    const newValue  = parseInt(counterValue.textContent, 10) + 1;
    counterValue.textContent = newValue;
    localStorage.setItem('counterValue', newValue);
    updateLastUpdated();
  });

  decrementBtn.addEventListener('click', function () {
    let value = parseInt(counterValue.textContent, 10);
    if (value === 0) {
      return;
    }
    counterValue.textContent = value - 1;
    localStorage.setItem('counterValue', value - 1);
    updateLastUpdated();
  });

  counterTitle.addEventListener('input', () => {
    localStorage.setItem('counterTitle', counterTitle.textContent);
  });

  function updateLastUpdated() {
    const now = new Date().toLocaleString();
    lastUpdated.textContent = `Last updated: ${now}`;
    localStorage.setItem('lastUpdated', now);
  }
});


