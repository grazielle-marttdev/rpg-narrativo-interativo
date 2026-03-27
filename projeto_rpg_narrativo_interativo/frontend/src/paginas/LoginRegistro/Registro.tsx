import { useNavigate } from 'react-router-dom';
import { ParticulasFlutuantes } from '../../componentes/ParticulasFlutuantes';
import styles from '../TelasLoginRegistro.module.css';

export const TelaRegistro = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        const nomeJogador = (document.getElementById("nomeJogador") as HTMLInputElement).value;
        const senha = (document.getElementById("senha") as HTMLInputElement).value;

        if (!nomeJogador || !senha) {
            event.preventDefault();
            console.log("Testando preventDefault()");
        }
    }

    return (
        <div className={styles.root}>
            <div className="bgAtmosferaA"></div>
            <div className="bgAtmosferaB"></div>
            <ParticulasFlutuantes></ParticulasFlutuantes>

            <button className={styles.botaoVoltar} onClick={() => navigate("/menu")} aria-label="Voltar para o menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-5 h-5"><path d="m15 18-6-6 6-6"></path></svg>
            </button>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.logoContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-8 h-8 text-primary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <h1 className={styles.titulo}>Criar conta</h1>
                <p className={styles.subtitulo}>Comece sua jornada</p>

                <div className={styles.inputContainer}>
                    <div className={styles.iconeLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-3 h-3"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <label htmlFor="nomeJogador">Nome do Jogador</label>
                    </div>
                    <input className={styles.input} type="text" placeholder="Digite seu nome" id="nomeJogador" aria-required="true" />
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.iconeLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key w-3 h-3"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
                        <label htmlFor="senha">Senha</label>
                    </div>
                    <input className={styles.input} type="password" placeholder="Digite sua senha" id="senha" aria-required="true" />
                </div>

                <button className={styles.botao} aria-label="Criar conta" type="submit">
                    <span className={styles.btnLabel}>Criar conta</span>
                </button>

                <div className={styles.divisor}></div>

                <span className={styles.textoRodape}>Seu progresso é salvo automaticamente.</span>
            </form>
        </div>
    )
}