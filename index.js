document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('msgTextarea');
  const resultSection = document.getElementById('result');
  const btnEncrypt = document.getElementById('btnEncrypt');
  const btnDecrypt = document.getElementById('btnDecrypt');

  function encrypt(text) {
      const mappings = {
          'e': 'enter',
          'i': 'imes',
          'a': 'ai',
          'o': 'ober',
          'u': 'ufat'
      };
      return text.replace(/[eioua]/g, match => mappings[match]);
  }

  function decrypt(text) {
      const mappings = {
          'enter': 'e',
          'imes': 'i',
          'ai': 'a',
          'ober': 'o',
          'ufat': 'u'
      };
      return text.replace(/enter|imes|ai|ober|ufat/g, match => mappings[match]);
  }

  
  function displayMessage(message) {
      resultSection.innerHTML = `
          <div class="msg-result">
              <p>${message}</p>
              <button id="btnCopy" class="btn dark-blue unselectable">Copiar</button>
          </div>
      `
      const btnCopy = document.getElementById('btnCopy');
      btnCopy.addEventListener('click', () => {
          navigator.clipboard.writeText(message)
              .then(() => {
                  alert('Mensagem copiada!');
              })
              .catch(err => {
                  console.error('Erro ao copiar mensagem:', err);
              });
      });
  }

  function displayNoMessage() {
      resultSection.innerHTML = `
          <div class="msg-not-found fade-in">
              <img id="imgNoMsgFound" src="assets/logo-img.svg" alt="Nenhuma mensagem encontrada.">
              <h3>Nenhuma mensagem encontrada</h3>
              <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
          </div>
      `;
  }

  
  btnEncrypt.addEventListener('click', () => {
      const text = textarea.value.trim();
      if (text) {
          const encryptedText = encrypt(text);
          displayMessage(encryptedText);
      } else {
          displayNoMessage();
      }
  });

  btnDecrypt.addEventListener('click', () => {
      const text = textarea.value.trim();
      if (text) {
          const decryptedText = decrypt(text);
          displayMessage(decryptedText);
      } else {
          displayNoMessage();
      }
  });

  
  displayNoMessage();
});
