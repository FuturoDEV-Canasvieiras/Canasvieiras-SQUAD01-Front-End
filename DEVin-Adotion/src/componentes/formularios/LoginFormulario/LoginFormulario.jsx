import { useFetch } from "../../../hooks/useFetch"
import { useForm } from "../../../hooks/useForm"

export default function LoginFormulario(){
    const { handleChange, form, resetForm } = useForm({email:"", senha:""})
    const {getData} = useFetch('')

    const handleSubmit = (event) => {
        event.preventDefault();
        getData(form)
        resetForm();
    }
    
    return (
        <>
            <div className='form-container'>
                <h1 className='formulario-h1'>Login</h1>
                <div className='formulario'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" name="email" value={form.email} onChange={handleChange}/><br />
                        <label htmlFor="senha">Senha</label><br />
                        <input type="password" name="senha" value={form.senha} onChange={handleChange}/><br />
                        <button type="submit" className="button-form">Entrar</button>
                    </form>
                    <span>Clique {<a href='/cadastro_usuario'>aqui</a>} para cadastrar</span>
                </div>
            </div>
        </>
        
    )
}