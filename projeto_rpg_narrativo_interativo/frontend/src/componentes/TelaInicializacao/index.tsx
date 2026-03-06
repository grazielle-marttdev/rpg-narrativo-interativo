import { useEffect, useState } from "react";
import styles from './TelaInicializao.module.css';
import { ParticulasFlutuantes } from "../ParticulasFlutuantes";

interface TelaInicializacaoProps {
    onIniciar: () => void;
}

export const TelaInicializacao = ({ onIniciar }: TelaInicializacaoProps) => {
    const [fase, setFase] = useState<'carregando' | 'titulo' | 'preparar'>('carregando');
    const [progresso, setProgresso] = useState(0);
    const [statusTexto, setStatusTexto] = useState('Ajustando o núcleo de ecos...');

    // Simula o processo de inicialização
    useEffect(() => {
        const statusMensagens = [
            'Ajustando o núcleo de ecos...',
            'Despertando histórias adormecidas...',
            'Alinhando camadas de memória...',
            'Estabilizando atmosfera...',
            'Portal pronto.'
        ];

        let msgAtualIndex = 0;
        const msgIntervalo = setInterval(() => {
            if (msgAtualIndex < statusMensagens.length - 1) {
                msgAtualIndex++;
                setStatusTexto(statusMensagens[msgAtualIndex]);
            } else {
                clearInterval(msgIntervalo);
            }
        }, 900); // Muda a mensagem a cada 900ms

        const intervalo = setInterval(() => {
            setProgresso((prev) => {
                if (prev >= 100) {
                    clearInterval(intervalo);
                    setTimeout(() => setFase('titulo'), 500); // Pequena pausa antes de mostrar o título
                    return 100;
                }
                return prev + 1; // Aumenta o progresso em 1% a cada intervalo  
            });
        }, 50); // Atualiza o progresso a cada 50ms

        return () => {
            clearInterval(intervalo);
            clearInterval(msgIntervalo);
        };
    }, []); // Executa apenas uma vez na montagem do componente  

    useEffect(() => {
        if (fase === 'titulo') {
            const timer = setTimeout(() => setFase('preparar'), 1400); // Exibe o título por 1.4 segundos antes de mostrar a tela de preparação
            return () => clearTimeout(timer);
        }
    }, [fase]);

    return (
        <div className={styles.root}>
            {/* Background Atmosfera */}
            <div className={styles.bgAtmosferaA}></div>
            <div className={styles.bgAtmosferaB}></div>

            <ParticulasFlutuantes />

            {/* Content */}
            <div className={styles.content}>
                {fase === 'carregando' && (
                    <div className={`${styles.escudoPortal} ${styles.carregandoPainel}`}>
                        <div className={styles.circuloGiratorio}>
                            <div className={styles.exteriorGiratorio}>
                                <div className={styles.interiorGiratorio}></div>
                            </div>
                        </div>

                        <div className={styles.trilhaProgresso}>
                            <div className={styles.preenchimentoProgresso} style={{ width: `${progresso}%`}} />
                        </div>

                        <div className={styles.linhaStatus}>
                            <p className={styles.statusTexto}>
                                {statusTexto}
                            </p>
                            <p className={styles.statusProgresso}>{progresso}%</p>
                        </div>
                    </div>
                )}

                {(fase === 'titulo' || fase === 'preparar') && (
                    <div className={`${styles.escudoPortal} ${styles.tituloPainel}`}>
                        <div className={styles.envoltorioPortalLabel}>
                            <p className={styles.portalLabel}>Portal Desperto</p>
                        </div>

                        <h1 className={styles.titulo}>Ecos da Jornada</h1>

                        <p className={styles.subtitulo}>Histórias aguardam em um núcleo silencioso. Cada escolha desperta um novo eco.</p>

                        <div className={`${styles.divisor} ${styles.revelacaoDivisor}`} />

                        {fase === 'preparar' && (
                            <button type="button" onClick={onIniciar} className={`${styles.ctaBotao} ${styles.revelacaoCta}`}>
                                <span className={styles.ctaLabel}>Acessar Núcleo</span>
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Sistema Info */}
            <div className={styles.infoSistema}>
                <p className={styles.textoSistema}>Núcleo de Ecos v1.0.42</p>
            </div>
        </div>

    )
}

