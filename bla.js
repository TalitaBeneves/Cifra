function cripCesar() {
  var alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var frase = document.getElementById('frase').value.toLowerCase();
  var chave = document.getElementById('chave').value;
  var x = parseInt(chave);
  var cont = [];

  for (var i = 0; i < frase.length; i++) {
      if (frase[i] != ' ') {
          for (var j = 0; j < alfa.length; j++) {
              if (frase[i] == alfa[j]) {
                  cont[i] = alfa[(j + x) % alfa.length];
              }
          }
      } else {
          cont[i] = ' ';
      };
  };

  let codigo = cont.join("");
  document.getElementById('res').innerHTML = `Mensagem codificada é : ${codigo}`
  document.getElementById('res').style.fontWeight = "900";
  document.getElementById('resAlt').style.padding = "10px";

};

function base64cript() {
  var strg = "";
  var strg = document.getElementById('fraseAlt').value;
  var embase64 = btoa(strg);
  document.getElementById('resAlt').innerHTML = `Mensagem codificada é : ${embase64}`
  document.getElementById('resAlt').style.fontWeight = "900";
  document.getElementById('resAlt').style.padding = "10px";


};

function base64decript() {
  var strg = "";
  var strg = document.getElementById('fraseAlt').value;
  var debase64 = atob(strg);
  document.getElementById('resAlt').innerHTML = `Mensagem decodificada é : ${debase64}`
  document.getElementById('resAlt').style.fontWeight = "900";
  document.getElementById('resAlt').style.padding = "10px";

};

function cifraCesarCriptografarAlt() {
  var alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var frase = document.getElementById('frase').value.toLowerCase();
  var chave = document.getElementById('chave').value;
  var x = parseInt(chave);
  var cont = [];
  var novachave = alfa.length - (x % alfa.length);

  for (var i = 0; i < frase.length; i++) {
      if (frase[i] != ' ') {
          for (var j = 0; j < alfa.length; j++) {
              if (frase[i] == alfa[j]) {
                  cont[i] = alfa[(j + novachave) % alfa.length];
              }
          }
      } else {
          cont[i] = ' ';
      };
  };
  let codigo = cont.join("");
  document.getElementById('res').innerHTML = `Mensagem decodificada é : ${codigo}`
  document.getElementById('res').style.fontWeight = "900";
};

function div(select) {
  if (select.value == 'cifra') {
      document.getElementById('cifraCesar').style.display = "block";
      document.getElementById('cifraCesar').style.flexDirection = "column";
      document.getElementById('base64').style.display = "none";

      var radioCesar = document.getElementById('cifraCesarCript');
      var radioCesarAlt = document.getElementById('cifraCesarDecript');
      var radio1 = document.getElementById('cifraCesarCriptRadio');

      function radioClick() {
          if (radio1.checked) {
              radioCesar.style.display = 'block';
              radioCesarAlt.style.display = 'none';

          } else {
              radioCesar.style.display = 'none';
              radioCesarAlt.style.display = 'block';

          }
      }

      const radioButtons = document.querySelectorAll("input[name='cifraCesarName']");
      radioButtons.forEach(radio => {
          radio.addEventListener('change', radioClick);
      });

  } else if (select.value == 'base64') {
      document.getElementById('cifraCesar').style.display = "none";
      document.getElementById('base64').style.display = "block";

      var radioBase64 = document.getElementById('base64criptada');
      var radioBase64Alt = document.getElementById('base64decriptada');
      var radio2 = document.getElementById('base64criptadaRadio');

      function radioClickB() {
          if (radio2.checked) {
              radioBase64.style.display = 'block';
              radioBase64Alt.style.display = 'none';


          } else {
              radioBase64.style.display = 'none';
              radioBase64Alt.style.display = 'block';

          }
      }

      const radioButtons = document.querySelectorAll("input[name='base64']");
      radioButtons.forEach(radio => {
          radio.addEventListener('change', radioClickB);
      });

  } else {
      document.getElementById('cifraCesar').style.display = "none";
      document.getElementById('base64').style.display = "block";
      radioCesarAlt.style.padding = '20px';

  }
};