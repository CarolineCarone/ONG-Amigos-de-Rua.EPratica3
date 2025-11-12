const inputCPF = document.getElementById('cpf');

inputCPF.addEventListener('input', function(){
  let value = inputCPF.value;

  value = value.replace(/\D/g, '');

  value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  inputCPF.value = value.slice(0, 14);
})

const inputTelefone = document.getElementById('telefone');

inputTelefone.addEventListener('input', function() {
  let value = inputTelefone.value;

  value = value.replace(/\D/g, '');

  value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

  inputTelefone.value = value.slice(0, 16);
})

const inputCep = document.getElementById('cep');
inputCep.addEventListener('input', function() {
  let value = inputCep.value;

  value = value.replace(/\D/g, '');

  value = value.replace(/(\d{5})(\d{3})/, '$1-$2');

  inputCep.value = value.slice(0, 9);
})

