import {ShieldCheck, LogOut} from "lucide-react";

export default function Sucesso({usuario, onLogout}){
    return(
        <main className="page-shell">
            <section className="sucess-card">
                <div className="sucess-icon"><ShieldCheck size={46}/></div>
                <p className="eyebrow">Rota Protegida</p>
                <h1>Login realizado com sucesso</h1>
                <p className="subtitle">
                    Bem-vindo {usuario?.usuario ? `, ${usuario.usuario}`: ""}. O acesso só aparece para usuários autentificados.

                </p>
                <button className="primary logout" onClick={onLogout}>
                    <LogOut size={18}/> Sair
                </button>
            </section>
        </main>
    );
}
