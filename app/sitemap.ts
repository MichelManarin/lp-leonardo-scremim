import { MetadataRoute } from 'next'

const cities = [
  'orleans',
  'urussanga', 
  'lauro-muller',
  'morro-da-fumaca',
  'sao-ludgero',
  'braco-do-norte'
]

const cityNames = {
  'orleans': 'Orleans',
  'urussanga': 'Urussanga',
  'lauro-muller': 'Lauro Müller',
  'morro-da-fumaca': 'Morro da Fumaça',
  'sao-ludgero': 'São Ludgero',
  'braco-do-norte': 'Braço do Norte'
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://premolde.com.br' // Substitua pelo seu domínio real
  
  // Páginas principais
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projetos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Páginas específicas por cidade
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/premolde-${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...mainPages, ...cityPages]
} 