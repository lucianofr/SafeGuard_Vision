export default function Footer() {
  return (
    <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
      SafeGuard Vision © {new Date().getFullYear()}. Todos os direitos reservados.
    </footer>
  );
}
