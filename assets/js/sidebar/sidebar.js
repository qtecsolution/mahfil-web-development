document.addEventListener('DOMContentLoaded', () => {
  const brandLogo = document.querySelector('.logo')
  const sidebar = document.querySelector('.sidebar')
  const linkTexts = document.querySelectorAll('.linktext')
  const logTitle = document.querySelector('.logtitle')
  const main = document.querySelector('.main')

  const buttonHamburger = document.querySelector('.btn-hamburger')
  const buttonShow = document.querySelector('.btn-show')

  function collapseSidebar() {
    buttonHamburger.classList.add('d-none')
    buttonShow.classList.remove('d-none')
    brandLogo.classList.add('d-none')
    sidebar.classList.add('sidecollapsed')
    logTitle.classList.add('d-none')
    main.classList.add('maincollapsed')

    linkTexts.forEach((link) => {
      link.classList.add('d-none')
    })
  }

  function expandSidebar() {
    buttonShow.classList.add('d-none')
    brandLogo.classList.remove('d-none')
    sidebar.classList.remove('sidecollapsed')
    main.classList.remove('maincollapsed')
    buttonHamburger.classList.remove('d-none')
    logTitle.classList.remove('d-none')

    linkTexts.forEach((link) => {
      link.classList.remove('d-none')
    })
  }

  buttonHamburger.addEventListener('click', collapseSidebar)
  buttonShow.addEventListener('click', expandSidebar)
})
