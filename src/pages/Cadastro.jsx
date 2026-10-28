import {useState} from "react";
import {useNavigate} from "react-router-dom";

import { UserPlus, User, LockKeyhole} from "lucide-react";
import { cadastrar} from "../services/api";

export default function Cadastro(){
    const [usuario, setUsuario]= userState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem]= useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    async function handleCadastro(e){
        e.preventDefault()

import {UserPlus, User, LockKeyhole} from "lucide-react";
import {cadastrar} from "../services/api";

export default function Cadastro(){
    const [usuario, setUsuario] = useState ("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro ] = useState ("");
    const navigate = useNavigate();

    async function handleCadastro(e){
        e.preventDefault();
        setMensagem("");
        setErro("");

        if(!usuario || !senha){

            setErro("Preencha todos os campos.");
            return;
        }try{
            const response = await cadastrar (usuario, senha);
            setMensagem(responde.mensagem);
            setTimeout(()=>navigate("/login"),800);

        }catch (erro){ setErro(erro.message)}

            setErro("Preencha todos os campos :P");
            return;
        } try {
            const response = await cadastrar(usuario, senha);
            setMensagem(response.mensagem);
            setTimeout(()=>navigate("/login"),800);

        }catch (erro){
            setErro(erro.message);
        }

    }
    return(
        <main className="page-shell">
            <section className="auth-card">


                <div className="brand-icon"><UserPlus size={28}/></div>
                <p className="eyebrow">Novo Acesso</p>
                <h1>Cadastro</h1>
                <p className="Subtitle">Crie um usuario parar testar a autentificação</p>

                <form onSubmit={handleCadastro}>
                    <label>
                        Usuário
                        <div className="input-wrap">
                            <User size={18}/>
                            <input placeholder ="Escolha um usuario" value={usuario} onChange={(e)=> setUsuario(e.target.value)}></input>
                        </div>
                    </label>

                    <label>
                        Senha 
                        <div className="input-wrap">
                            <LockKeyhole size={18}/>
                            <input type="password" placeholder="Crie uma senha" value={senha} onChange={(e)=>setSenha(e.target.value)}></input>
                        </div>
                    </label>

                    {erro && <p className="error">{erro}</p>}
                    {mensagem && <p className="sucess-msg">{mensagem}</p>}

                    <button className="primary" type="submit"> Cadastrar </button>
                </form>

                <button className="secondary" onClick={()=>navigate("/login")}>Voltar para o Login</button>
            </section>
        </main>
    );

                <div className="brand-icon"> <UserPlus size={28}></UserPlus></div>
                    <p className="eyebrow">Novo acesso</p>
                    <h1>Cadastro</h1>
                    <p className="subtitle">crie um usuario para testar a autentificaçao.</p>
            </section> AAAAAAAAAAAAAAAAAAAA PAROU AQUI LINA 38
        </main>
    )


}
