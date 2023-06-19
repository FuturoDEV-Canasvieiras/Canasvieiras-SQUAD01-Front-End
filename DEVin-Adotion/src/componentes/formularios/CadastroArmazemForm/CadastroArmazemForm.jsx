import { useFetch } from '../../../hooks/useFetch'
import { useForm } from '../../../hooks/useForm'

export default function CadastroArmazemForm() {
    const { handleChange, form, resetForm } = useForm({ armazem: "", animal: "" })
    const { createData } = useFetch('https://648b306e17f1536d65ea8f26.mockapi.io/testeapi/armazens')

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
                <label htmlFor='armazem'>Animal:</label><br />
                <select name='animal' value={form.animal} onChange={handleChange}>
                    <option value="" disabled>Selecione o Estoque</option>
                    <option value="gato">Gato</option>
                    <option value="cachorro">Cachorro</option>
                </select><br />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}