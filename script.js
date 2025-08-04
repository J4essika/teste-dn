document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contato form');
  const nome = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const mensagem = form.querySelector('textarea');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Limpar mensagens anteriores
    const erros = form.querySelectorAll('.error-msg');
    erros.forEach(err => err.remove());

    let valido = true;

    // Função para criar mensagem de erro
    function criarErro(input, msg) {
      const erro = document.createElement('small');
      erro.classList.add('error-msg');
      erro.style.color = '#ff4d4d';
      erro.textContent = msg;
      input.insertAdjacentElement('afterend', erro);
      valido = false;
    }

    // Valida nome
    if (nome.value.trim() === '') {
      criarErro(nome, 'Por favor, preencha seu nome.');
    }

    // Valida email (simples regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
      criarErro(email, 'Por favor, preencha seu email.');
    } else if (!emailRegex.test(email.value.trim())) {
      criarErro(email, 'Por favor, insira um email válido.');
    }

    // Valida mensagem
    if (mensagem.value.trim() === '') {
      criarErro(mensagem, 'Por favor, escreva sua mensagem.');
    }

    if (valido) {
      // Simular envio (Aqui você pode integrar com backend real)
      alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
      form.reset();
    }
  });
});
