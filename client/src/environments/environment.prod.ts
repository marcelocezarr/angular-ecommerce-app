const host = window.location.hostname; // pega o IP/DNS da VM
export const environment = {
  production: true,
  apiUrl: `http://${host}:3000/api/v1/`,
};
