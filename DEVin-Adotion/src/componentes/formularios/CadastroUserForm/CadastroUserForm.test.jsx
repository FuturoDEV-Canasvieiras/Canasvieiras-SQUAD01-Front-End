import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CadastroUserForm from './CadastroUserForm';
import userEvent from '@testing-library/user-event';
import {vi} from 'vitest'

const mockCreateData = vi.fn();
vi.mock("../../../hooks/useFetch", () => ({
  useFetch: () => ({
    createData: mockCreateData,
  }),
}));
describe('Teste do componente CadastroUserForm', () => {
    test('Deve renderizar o componente sem erros', () => {
        render(
            <BrowserRouter>
            <CadastroUserForm />
          </BrowserRouter>
          );
          const linkElement = screen.getByText(/Cadastro/i);
          expect(linkElement).toBeInTheDocument();
    });

    test('Deve exibir o texto "Se já tiver uma conta..."', () => {
        render(<BrowserRouter>
            <CadastroUserForm />
          </BrowserRouter>);
        const linkElement = screen.getByText(/Se já tiver uma conta/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Caso o formulário seja submetido com um campo vazio, deve exibir a mensagem Por favor, preencha todos os campos', async () => {
        const user = userEvent.setup()
        render(<BrowserRouter>
            <CadastroUserForm />
          </BrowserRouter>);
        const button = screen.getByRole('button', { name: /Cadastrar/i });
        user.click(button);
        const alert = await screen.findByText(/Por favor, preencha todos os campos/i);
        expect(alert).toBeInTheDocument();
    });
      

    test('Caso o formulário seja submetido com sucesso, deve exibir a mensagem "Cadastro bem sucedido!"', async () => {
        const user = userEvent.setup()
        render(<BrowserRouter>
            <CadastroUserForm />
          </BrowserRouter>);
        const nome = screen.getByText(/Nome/i);
        user.type(nome, 'João da Silva Pereira');
        const email = screen.getByText(/E-mail/i);
        user.type(email, 'joao@email.com');
        const senha = screen.getByText(/Senha/i);
        user.type(senha, '123456');

        const button = screen.getByRole('button', { name: /Cadastrar/i });
        user.click(button);

        const alert = await screen.findByText(/Cadastro/i);
        expect(alert).toBeInTheDocument();
    });

    test('Caso o formulário seja submetido e o email já tiver sido cadastrado, deve exibir a mensagem "Este e-mail já está cadastrado."', async () => {
        const user = userEvent.setup()
        render(<BrowserRouter>
            <CadastroUserForm />
          </BrowserRouter>);

        const nome = screen.getByText(/Nome/i);
        user.type(nome, 'João da Silva Pereira');
        const email = screen.getByText(/E-mail/i);
        user.type(email, 'joao@email.com');
        const senha = screen.getByText(/Senha/i);
        user.type(senha, '123456');

        const button = screen.getByRole('button', { name: /Cadastrar/i });
        await user.click(button);

        const alert = await screen.findByText(/Este e-mail já está cadastrado./i);
        expect(alert).toBeInTheDocument();

    });

})