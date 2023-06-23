import  CadastroUserForm  from "./CadastroUserForm.jsx";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {vi} from 'vitest'
import { ViProvider } from 'vitest';

describe('Teste do componente CadastroUserForm', () => {
    test.only('Deve renderizar o componente sem erros', () => {
        render(
            <ViProvider>
              <CadastroUserForm/>
            </ViProvider>
          );
          const linkElement = screen.getByText(/Cadastro de Usuário/i);
          expect(linkElement).toBeInTheDocument();
    });

    test('Deve exibir o texto "Cadastro de Usuário"', () => {
        render(<CadastroUserForm />);
        const linkElement = screen.getByText(/Cadastro de Usuário/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Deve exibir o texto "Nome completo"', () => {
        render(<CadastroUserForm />);
        const linkElement = screen.getByText(/Nome completo/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Deve exibir o texto "Endereço de E-mail"', () => {
        render(<CadastroUserForm />);
        const linkElement = screen.getByText(/Endereço de E-mail/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Deve exibir o texto "Senha"', () => {
        render(<CadastroUserForm />);
        const linkElement = screen.getByText(/Senha/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Deve exibir o texto "Cadastrar"', () => {
        render(<CadastroUserForm />);
        const linkElement = screen.getByText(/Cadastrar/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Deve exibir o texto "Se já tiver uma conta, clique aqui para fazer login"', () => {
        render(<CadastroUserForm />);
        const linkElement = screen.getByText(/Se já tiver uma conta, clique aqui para fazer login/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Deve exibir o texto "Faça o login clicando aqui!"', () => {
        render(<CadastroUserForm />);
        const linkElement = screen.getByText(/Faça o login clicando aqui!/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Caso o formulário seja submetido com um campo vazio, deve exibir a mensagem Por favor, preencha todos os campos', async () => {
        const user = userEvent.setup()
        render(<CadastroUserForm />);
        const button = screen.getByRole('button', { name: /Cadastrar/i });
        user.click(button);
        const alert = await screen.findByText(/Por favor, preencha todos os campos/i);
        expect(alert).toBeInTheDocument();
    });

    test('Caso o formulário seja submetido, deve chamar a função handleSubmit', async () => {
        const user = userEvent.setup()
        const handleSubmit = vi.fn();
        render(<CadastroUserForm onSubmit={handleSubmit} />);
        const button = screen.getByRole('button', { name: /Cadastrar/i });
        user.click(button);
        expect(handleSubmit).toHaveBeenCalled();
    })

    test('Caso o formulário seja submetido com sucesso, deve exibir a mensagem "Cadastro bem sucedido!"', async () => {
        const user = userEvent.setup()
        render(<CadastroUserForm />);
        const nome = screen.getByLabelText(/Nome completo/i);
        user.type(nome, 'João da Silva Pereira');
        const email = screen.getByLabelText(/Endereço de E-mail/i);
        user.type(email, 'joao@email.com');
        const senha = screen.getByLabelText(/Senha/i);
        user.type(senha, '123456');

        const button = screen.getByRole('button', { name: /Cadastrar/i });
        user.click(button);

        const alert = await screen.findByText(/Cadastro bem sucedido!/i);
        expect(alert).toBeInTheDocument();
    });

    test('Caso o formulário seja submetido e o email já tiver sido cadastrado, deve exibir a mensagem "Este e-mail já está cadastrado."', async () => {
        const user = userEvent.setup()
        render(<CadastroUserForm />);

        const nome = screen.getByLabelText(/Nome completo/i);
        user.type(nome, 'João da Silva Pereira');
        const email = screen.getByLabelText(/Endereço de E-mail/i);
        user.type(email, 'joao@email.com');
        const senha = screen.getByLabelText(/Senha/i);
        user.type(senha, '123456');

        const button = screen.getByRole('button', { name: /Cadastrar/i });
        user.click(button);

        const alert = await screen.findByText(/Este e-mail já está cadastrado./i);
        expect(alert).toBeInTheDocument();

    });

})