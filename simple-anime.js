window.SimpleAnime = class {
  constructor() {
    (this.items = document.querySelectorAll('[data-anime]')), this.init();
  }
  animateItems() {
    this.items.forEach((t) => {
      const e = Number(t.getAttribute('data-anime'));
      isNaN(e) ||
        setTimeout(() => {
          t.classList.add('anime');
        }, e);
    });
  }
  handleVisibility() {
    void 0 !== document.visibilityState
      ? 'visible' === document.visibilityState && this.animateItems()
      : this.animateItems();
  }
  init() {
    (this.handleVisibility = this.handleVisibility.bind(this)),
      this.handleVisibility(),
      document.addEventListener('visibilitychange', this.handleVisibility);
  }
};
new SimpleAnime();

document.querySelector('.modal-content .copy-button').addEventListener('click', function () {
  var pixKey = '77988670084'; // Substitua pelo valor da sua chave Pix
  var textArea = document.createElement('textarea');
  textArea.value = pixKey;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  var copyMessage = document.getElementById('copy-message');
  copyMessage.classList.remove('hidden');

  setTimeout(function () {
    copyMessage.classList.add('hidden');
  }, 2000);
});

document.querySelector('.modal-content .copy-button2').addEventListener('click', function () {
  var pixKey = '77981348438'; // Substitua pelo valor da sua chave Pix
  var textArea = document.createElement('textarea');
  textArea.value = pixKey;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  var copyMessage = document.getElementById('copy-message');
  copyMessage.classList.remove('hidden');

  setTimeout(function () {
    copyMessage.classList.add('hidden');
  }, 2000);
});

// Obter o modal
var modal = document.getElementById("myModal");

// Obter o botão que abre o modal
var btn = document.getElementById("openModalBtn");

// Obter o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abra o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar em <span> (x), feche o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





// Obter o modal
var modal2 = document.getElementById("myModal2");

// Obter o botão que abre o modal
var btn2 = document.getElementById("openModalBtn2");

// Obter o elemento <span> que fecha o modal
var span2 = document.getElementsByClassName("close2")[0];

// Quando o usuário clicar no botão, abra o modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// Quando o usuário clicar em <span> (x), feche o modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}



