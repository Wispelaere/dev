function estAdresseMail() {
  const verifEmail = document.getElementById("email");
  let email = verifEmail.value;

  const expression = new RegExp(
      "[a-z0-9!#$%&'+/=?^{|}~-]+(?:.[a-z0-9!#$%&'+/=?^{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    );

  return expression.test(email);
}

console.log(estAdresseMail());