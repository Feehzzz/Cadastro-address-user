async function getCEP(cep) {

  const res = await fetch(`/getaddress?zip=${cep}`)
  const data = await res.json()
  if (res.status === 200) {
    getElement(data)
  } else {
    wrongCep(cep)
  }
}

function getElement(data) {
  const zip = document.getElementById('inputZip');
  zip.classList.remove('is-invalid');
  const adress1 = document.querySelector('#inputAddress1');
  const adress2 = document.querySelector('#inputAddress2');
  const adress3 = document.querySelector('#inputAddress3');
  const city = document.querySelector('#inputCity');
  const state = document.querySelector('#inputState')

  document.querySelector('#inputNumber').focus();

  adress1.value = data.logradouro;
  adress2.value = data.complemento;
  adress3.value = data.bairro;
  city.value = data.localidade;
  state.value = data.uf

  adress1.setAttribute('readonly', 'true');
  adress3.setAttribute('readonly', 'true');
  city.setAttribute('readonly', 'true');
  state.setAttribute('readonly', 'true');

}
function wrongCep() {
  const zip = document.getElementById('inputZip');
  zip.classList.add('is-invalid');
  zip.value = '';
  zip.focus();
  return
}