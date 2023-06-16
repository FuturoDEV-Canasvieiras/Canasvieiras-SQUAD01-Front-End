import { useFetch } from '../../../hooks/useFetch'
import { useForm } from '../../../hooks/useForm'

export default function CadastroForm() {
    const { handleChange, form, resetForm } = useForm({nome:"", senha:"", email:""})
    const { createData } = useFetch('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        createData(form)
        resetForm();
    }
    return (
        <>
            <div className='form-container'>
                <h1 className='formulario-h1'>Cadastro</h1>
                <div className='formulario'>
                    <form onSubmit={handleSubmit}>
                        Nome:<br />
                        <input type="text" name="nome" value={form.nome} onChange={handleChange} /><br />
                        E-mail:<br />
                        <input type="email" name="email" value={form.email} onChange={handleChange} /><br />
                        Senha:<br />
                        <input type="password" name="senha" value={form.senha} onChange={handleChange} /><br />
                        <button type="submit" className="button-form">Cadastrar</button>
                    </form>
                    <span>Clique {<a href='/'>aqui</a>} para fazer login</span>
                </div>
            </div>
        </>
    )
}