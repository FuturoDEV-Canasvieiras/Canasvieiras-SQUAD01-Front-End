export default function CadastroUserForm() {

    return (
        <>
            <h1>Cadastro</h1>
            <form>
                Nome:<br />
                <input type="text" name="nome" /><br />
                E-mail:<br />
                <input type="email" name="email" /><br />
                Senha:<br />
                <input type="password" name="senha" /><br />
                <button type="submit" className="button-form">Cadastrar</button>
            </form>
        </>
    )
}