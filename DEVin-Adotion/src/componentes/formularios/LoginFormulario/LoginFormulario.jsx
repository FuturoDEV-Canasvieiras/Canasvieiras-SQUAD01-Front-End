import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useFetch } from '../../../hooks/useFetch';


export default function LoginFormulario() {
  const { handleChange, form, resetForm } = useForm({
    senha: "",
    email: "",
  })
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const  { getData } = useFetch("https://login-futurodev.free.beeceptor.com/loginpost")
      

      if (form.email === getData.email && form.senha === getData.senha) {
        setStatus('Login bem sucedido!');
        
      } else {
        setStatus('Credenciais inválidas.');
      }
    } catch (error) {
      setStatus('Ocorreu um erro ao processar a solicitação.');
    }

    resetForm()
    if (!form.email || !form.senha) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }
  };


  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <form
          onSubmit={handleSubmit}
          className="col-4"
          id="FormularioLoginUsuario"
        >
          <h1 className="text-center">Login</h1>
          <label htmlFor="email">Endereço de E-mail:</label>
          <br />
          <input
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="E-mail"
          />
          <br />
          <label htmlFor="senha">Senha:</label>
          <br />
          <input
            className="form-control"
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            placeholder="Digite uma senha"
          />
          <br />
          <button type="submit" className="button-form btn btn-success w-100">
            Entrar
          </button>
          <div className="text-center">
            <span>
              Clique{' '}
              {
                <a href="/cadastro_usuario">
                  <strong>aqui</strong>
                </a>
              }{' '}
              para cadastrar
            </span>
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          {status && <p>{status}</p>}
        </form>
      </div>
    </>
  );
}
