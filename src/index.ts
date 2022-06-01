interface User {
  firstName: string;
  lastName: string;
}

const usuario: User = {
  firstName: 'Diego',
  lastName: 'Roberto'
};

console.log(`${usuario.firstName} ${usuario.lastName}`);
