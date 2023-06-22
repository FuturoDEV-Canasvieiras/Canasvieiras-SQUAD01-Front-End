import { useFetch } from '../../../hooks/useFetch'
import { useForm } from '../../../hooks/useForm'
//url do fetch = mockapi pra testes
export default function CadastroArmazemForm() {
    const { handleChange, form, resetForm } = useForm({ nome: "", animal: "", situacao: true })
    const { createData } = useFetch("http://localhost:8080/armazem")

    const handleSubmit = () => {
        createData(form)
        resetForm();
    }
    return (
        <>
            <h1>Cadastro Armazém</h1>
            <form onSubmit={handleSubmit}>
                Armazém:<br />
                <input type="text" name="nome" value={form.nome} onChange={handleChange} /><br />
                <label htmlFor="animal">Animal:</label><br />
                <select name="animal" value={form.animal} onChange={handleChange}>
                    <option value="" disabled>Selecione o Estoque</option>
                    <option value="gato">Gato</option>
                    <option value="cachorro">Cachorro</option>
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