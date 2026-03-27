import { useNavigate } from 'react-router-dom';
import { ParticulasFlutuantes } from '../../componentes/ParticulasFlutuantes';
import styles from './Menu.module.css';

export const MenuLoginRegistro = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.root}>
            <div className="bgAtmosferaA"></div>
            <div className="bgAtmosferaB"></div>
            <ParticulasFlutuantes></ParticulasFlutuantes>

            <h1 className={styles.titulo}>Ecos da Jornada</h1>
            <p className={styles.subtitulo}>Um portal entre mundos</p>

            <div className={styles.botoesContainer}>
                <p className={styles.texto}>Escolha seu caminho</p>

                <div className={styles.botaoContainer}>
                    <button className={`${styles.botao} ${styles.login}`} onClick={() => navigate("/login")} aria-label="Login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in h-4 w-4"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" x2="3" y1="12" y2="12"></line></svg>

                        <div className={styles.textoBotao}>
                            <span className={styles.labelBotao}>Login</span>
                            <span>Entrar e continuar</span>
                        </div>
                    </button>

                    <button className={`${styles.botao} ${styles.registro}`} onClick={() => navigate("/registro")} aria-label="Registro">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus h-4 w-4 text-foreground/80"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>

                        <div className={styles.textoBotao}>
                            <span className={styles.labelBotao}>Registro</span>
                            <span>Crie sua conta</span>
                        </div>
                    </button>
                </div>

                <p className={styles.textoMensagem}>Cada escolha acende um novo eco.</p>
            </div>
        </div>
    )
}