const prefersDark = matchMedia('(prefers-color-scheme: dark)') && matchMedia('(prefers-color-scheme: dark)').matches,
  defaultTheme = prefersDark ? 'dark' : 'default',
  themes = [
    'default',
    'dark',
    'blue',
    'blue-dark'
  ];

var currentTheme =
  localStorage.getItem('forumoji-theme') || // local storage is shared across lopste.github.io, so avoid conflicts just in case
  defaultTheme;

$('#theme_button').click(function switch_theme() {
  let next_index = themes.indexOf(currentTheme) + 1;
  if (next_index >= themes.length) {
    setTheme(themes[0]);
    return;
  }
  setTheme(themes[next_index]);
})

setTheme(currentTheme);

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('forumoji-theme', theme);
  $('html').attr('class', theme);
};
