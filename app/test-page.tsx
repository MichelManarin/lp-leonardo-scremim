export default function TestPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎉 Next.js Funcionando!</h1>
      <p>Se você consegue ver esta página, a migração foi bem-sucedida!</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>✅ Testes Básicos:</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✅ Next.js rodando</li>
          <li>✅ TypeScript funcionando</li>
          <li>✅ CSS carregando</li>
          <li>✅ Componentes renderizando</li>
        </ul>
      </div>
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
        <strong>Próximo passo:</strong> Acesse a página principal em /
      </div>
    </div>
  )
} 