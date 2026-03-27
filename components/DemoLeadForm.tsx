'use client';

import { useState } from 'react';
import styles from './DemoLeadForm.module.css';

export default function DemoLeadForm() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className={styles.section} id="demo">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Pronto para modernizar a segurança da sua planta?</h2>
          <p className={styles.description}>
            Agende uma demonstração técnica com nossos especialistas e descubra como implementar o SafeGuard Vision na sua linha de produção em pouco tempo.
          </p>
        </div>

        {status === 'success' ? (
          <div className={styles.successMessage}>
            <h3>✓ Recebemos sua solicitação!</h3>
            <p>Nossa equipe técnica entrará em contato pelo email informado em breve para alinhar os detalhes.</p>
            <button onClick={() => setStatus('idle')} className={styles.submitBtn}>
              Enviar Outra Solicitação
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                placeholder="João Silva" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={status === 'loading'}
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Corporativo</label>
              <input 
                type="email" 
                id="email" 
                placeholder="joao@industria.com.br" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === 'loading'}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="company">Empresa</label>
              <input 
                type="text" 
                id="company" 
                placeholder="Indústria MTO" 
                required 
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                disabled={status === 'loading'}
              />
            </div>

            {status === 'error' && (
              <p className={styles.errorMessage}>Ocorreu um erro ao enviar. Tente novamente mais tarde.</p>
            )}

            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
              {status === 'loading' ? 'Enviando...' : 'Solicitar Demonstração'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
