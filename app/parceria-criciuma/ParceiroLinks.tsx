'use client'

export default function ParceiroLinks() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <a
        href="https://premoldado.emcriciuma.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '15px 30px',
          backgroundColor: '#2563eb',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          fontSize: '16px',
          textAlign: 'center',
          transition: 'opacity 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.85'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1'
        }}
      >
        Premoldado em Criciúma - emcriciuma.com.br
      </a>

      <a
        href="https://emcriciuma.com.br"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '15px 30px',
          backgroundColor: '#059669',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          fontSize: '16px',
          textAlign: 'center',
          transition: 'opacity 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.85'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1'
        }}
      >
        emcriciuma.com.br
      </a>
    </div>
  )
}

