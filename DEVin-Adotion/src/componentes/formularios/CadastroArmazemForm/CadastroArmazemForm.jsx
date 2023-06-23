import { useFetch } from '../../../hooks/useFetch'
import { useForm } from '../../../hooks/useForm'

export default function CadastroArmazemForm() {
    const { handleChange, form, resetForm } = useForm({ nome: "", animal: "", situacao: true })
    const { createData } = useFetch("http://localhost:8080/armazem")

    const handleSubmit = () => {
        if (form.nome.trim().length === 0) {
            alert("O nome do armazém não pode ser vazio ou em branco");
            return;
          }
          createData(form);
          resetForm()
    }

    return (
        <>
            <h1>Cadastro Armazém</h1>
            <form onSubmit={handleSubmit}>
                Armazém:<br />
                <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    minLength={3}
                /><br />
                <label htmlFor="animal">Animal:</label><br />
                <select name="animal" value={form.animal} onChange={handleChange}>
                    <option value="" disabled>Selecione o Estoque</option>
                    <option value="gato">Gato</option>
                    <option value="cachorro">Cachorro</option>
                </select><br />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}