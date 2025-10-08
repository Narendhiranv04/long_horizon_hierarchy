(function () {
  function initNavbar() {
    var burger = document.querySelector('.navbar-burger');
    var menu = document.getElementById(burger && burger.dataset.target);
    if (!burger || !menu) return;

    burger.addEventListener('click', function () {
      var active = burger.classList.toggle('is-active');
      menu.classList.toggle('is-active', active);
      burger.setAttribute('aria-expanded', active ? 'true' : 'false');
    });

    menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function () {
        if (burger.classList.contains('is-active')) {
          burger.classList.remove('is-active');
          menu.classList.remove('is-active');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  function initTabs() {
    document.querySelectorAll('[data-tabs]').forEach(function (tabs) {
      var tabLinks = tabs.querySelectorAll('li');
      tabLinks.forEach(function (tab) {
        tab.addEventListener('click', function (event) {
          event.preventDefault();
          if (tab.classList.contains('is-active')) return;

          var target = tab.querySelector('a').getAttribute('href');
          var container = tabs.nextElementSibling;

          tabLinks.forEach(function (item) {
            item.classList.remove('is-active');
          });
          tab.classList.add('is-active');

          container.querySelectorAll('.tab-pane').forEach(function (pane) {
            pane.classList.remove('is-active');
          });
          var activePane = container.querySelector(target);
          if (activePane) {
            activePane.classList.add('is-active');
          }
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initTabs();
  });
})();
