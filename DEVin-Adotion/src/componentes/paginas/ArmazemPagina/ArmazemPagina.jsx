import { CadastroArmazemForm } from "../../formularios";
import { ListaArmazenamentoDisponivel } from "../../listas";

export default function ArmazemPagina() {
    
    return (
        <>
            <CadastroArmazemForm />
            <h2>lista de armazens disponiveis</h2>
            <ListaArmazenamentoDisponivel />
            
        </>
    )
}