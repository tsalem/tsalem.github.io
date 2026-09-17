document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;
  var button = nav.querySelector('button');
  if (!button) return;

  button.setAttribute('type', 'button');
  button.setAttribute('aria-label', 'Open navigation menu');
  button.setAttribute('aria-expanded', 'false');

  var menu = document.createElement('ul');
  menu.className = 'mobile-menu';
  menu.setAttribute('aria-label', 'Mobile navigation');
  menu.innerHTML = '<li><a href="research.html">Research Projects</a></li>' +
                   '<li><a href="publications.html">Publications</a></li>' +
                   '<li><a href="teaching.html">Teaching</a></li>';
  nav.appendChild(menu);

  button.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    var open = nav.classList.toggle('mobile-open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });

  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target)) {
      nav.classList.remove('mobile-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open navigation menu');
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      nav.classList.remove('mobile-open');
      button.setAttribute('aria-expanded', 'false');
    }
  });
});
