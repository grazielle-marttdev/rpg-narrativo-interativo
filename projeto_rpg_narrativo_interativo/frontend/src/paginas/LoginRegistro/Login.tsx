import { useNavigate } from 'react-router-dom';
import { ParticulasFlutuantes } from '../../componentes/ParticulasFlutuantes';
import styles from './TelasLoginRegistro.module.css';
import type React from 'react';

export const TelaLogin = () => {
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                </div>
                <h1 className={styles.titulo}>Entrar</h1>
                <p className={styles.subtitulo}>Continue sua jornada</p>

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

                <button className={styles.botao} aria-label="Entrar" type="submit">
                    <span className={styles.btnLabel}>Entrar</span>
                </button>

                <div className={styles.divisor}></div>

                <span className={styles.textoRodape}>Seu progresso é salvo automaticamente.</span>
            </form>
        </div>
    )
}