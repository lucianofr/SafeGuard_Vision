import styles from './DemoLeadForm.module.css';

export default function DemoLeadForm() {
  return (
    <section className={styles.section} id="demo">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Pronto para modernizar a segurança da sua planta?</h2>
          <p className={styles.description}>
            Agende uma demonstração técnica com nossos especialistas e descubra como implementar o SafeGuard Vision na sua linha de produção em pouco tempo.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" placeholder="João Silva" required />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Corporativo</label>
            <input type="email" id="email" placeholder="joao@industria.com.br" required />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="company">Empresa</label>
            <input type="text" id="company" placeholder="Indústria MTO" required />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Solicitar Demonstração
          </button>
        </form>
      </div>
    </section>
  );
}
