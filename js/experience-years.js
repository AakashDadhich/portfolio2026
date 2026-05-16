const WORDS = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
const START = new Date(2019, 8, 1); // Sept 1 2019

function yearsOfExperience() {
  const now = new Date();
  let years = now.getFullYear() - START.getFullYear();
  if (now.getMonth() < 8) years--; // haven't reached September yet this year
  return years;
}

export function updateYearsDisplay() {
  const years = yearsOfExperience();
  const word = WORDS[years] ?? String(years);
  document.querySelectorAll('[data-yoe="word"]').forEach(el => {
    const cap = el.hasAttribute('data-yoe-cap');
    el.textContent = cap ? word.charAt(0).toUpperCase() + word.slice(1) : word;
  });
  document.querySelectorAll('[data-yoe="stat"]').forEach(el => {
    el.textContent = `${years}+`;
  });
}
