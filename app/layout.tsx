import React from 'react'
import type { Metadata } from 'next'
import '../src/index.css'
import '../src/App.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://premolde.com.br'), // Substitua pelo seu domínio real
  title: {
    default: 'Premolde - Engenharia Estrutural de Excelência | Galpões Industriais',
    template: '%s | Premolde Engenharia'
  },
  description: 'Premolde - Especialistas em engenharia de estruturas, galpões industriais e projetos estruturais com mais de 10 anos de experiência em Santa Catarina. Orçamento gratuito!',
  keywords: [
    'premolde',
    'engenharia estrutural',
    'galpões industriais',
    'estruturas metálicas',
    'construção civil',
    'projetos estruturais',
    'Orleans',
    'Urussanga',
    'Lauro Müller',
    'Morro da Fumaça',
    'São Ludgero',
    'Braço do Norte',
    'Santa Catarina',
    'SC'
  ],
  authors: [{ name: 'Leonardo Scremin Junior' }],
  creator: 'Premolde Engenharia',
  publisher: 'Premolde Engenharia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://premolde.com.br',
    siteName: 'Premolde Engenharia',
    title: 'Premolde - Engenharia Estrutural de Excelência | Galpões Industriais',
    description: 'Especialistas em engenharia de estruturas, galpões industriais e projetos estruturais com mais de 10 anos de experiência em Santa Catarina.',
    images: [
      {
        url: '/assets/section-hero.png',
        width: 1200,
        height: 630,
        alt: 'Premolde - Galpões Industriais de Alta Qualidade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premolde - Engenharia Estrutural de Excelência',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Santa Catarina',
    images: ['/assets/section-hero.png'],
  },
  alternates: {
    canonical: 'https://premolde.com.br',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Adicione seu código de verificação do Google
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Premolde - Engenharia Estrutural de Excelência</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Premolde - Especialistas em engenharia de estruturas, galpões industriais e projetos estruturais com mais de 10 anos de experiência em Santa Catarina. Orçamento gratuito!" />
        <meta name="keywords" content="premolde, engenharia estrutural, galpões industriais, estruturas metálicas, construção civil, Orleans, Urussanga, Lauro Müller, Morro da Fumaça, São Ludgero, Braço do Norte, Santa Catarina" />
        <meta name="author" content="Leonardo Scremin Junior" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premolde - Engenharia Estrutural de Excelência" />
        <meta property="og:description" content="Especialistas em galpões industriais e estruturas metálicas em Santa Catarina" />
        <meta property="og:url" content="https://premolde.com.br" />
        <meta property="og:site_name" content="Premolde Engenharia" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="/assets/section-hero.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premolde - Engenharia Estrutural" />
        <meta name="twitter:description" content="Especialistas em galpões industriais em Santa Catarina" />
        <meta name="twitter:image" content="/assets/section-hero.png" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Premolde Engenharia",
              "description": "Especialistas em engenharia de estruturas, galpões industriais e projetos estruturais",
              "url": "https://premolde.com.br",
              "telephone": "+554896986266",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Santa Catarina",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -28.2639,
                "longitude": -49.1633
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "$$",
              "image": "https://premolde.com.br/assets/section-hero.png",
              "logo": "https://premolde.com.br/assets/section-hero.png",
              "founder": {
                "@type": "Person",
                "name": "Leonardo Scremin Junior",
                "jobTitle": "Engenheiro Civil",
                "description": "Engenheiro Civil com mais de 10 anos de experiência em projetos estruturais"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -28.2639,
                  "longitude": -49.1633
                },
                "geoRadius": "50000"
              },
              "areaServed": [
                "Orleans, SC",
                "Urussanga, SC", 
                "Lauro Müller, SC",
                "Morro da Fumaça, SC",
                "São Ludgero, SC",
                "Braço do Norte, SC"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Engenharia",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Galpões Industriais",
                      "description": "Construção de galpões industriais de alta qualidade"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Projetos Estruturais",
                      "description": "Projetos estruturais otimizados e detalhados"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Construção Comercial",
                      "description": "Soluções completas para edifícios comerciais"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&family=Sora:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body style={{ fontFamily: 'Poppins, sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
} 