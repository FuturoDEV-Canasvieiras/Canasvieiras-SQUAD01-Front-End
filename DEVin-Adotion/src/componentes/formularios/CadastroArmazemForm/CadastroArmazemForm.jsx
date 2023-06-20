import { useFetch } from '../../../hooks/useFetch'
import { useForm } from '../../../hooks/useForm'
//url do fetch = mockapi pra testes
export default function CadastroArmazemForm() {
    const { handleChange, form, resetForm } = useForm({ armazem: "", animal: "", situacao: true })
    const { createData } = useFetch("https://648b306e17f1536d65ea8f26.mockapi.io/testeapi/armazens")

    const handleSubmit = (event) => {
        event.preventDefault();
        createData(form)
        resetForm();
    }
    return (
        <>
            <h1>Cadastro Armazém</h1>
            <form onSubmit={handleSubmit}>
                Armazém:<br />
                <input type="text" name="armazem" value={form.armazem} onChange={handleChange} /><br />
                <label htmlFor="armazem">Animal:</label><br />
                <select name="animal" value={form.animal} onChange={handleChange}>
                    <option value="" disabled>Selecione o Estoque</option>
                    <option value="Gato">Gato</option>
                    <option value="Cachorro">Cachorro</option>
                </select><br />
                <label htmlFor="situacao">Situação:</label><br />
                <select name="situacao" value={form.situacao} onChange={handleChange}>
                    <option value="" disabled>Selecione a Situação</option>
                    <option value={true}>Disponível</option>
                    <option value={false}>Indisponível</option>
                </select><br />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}