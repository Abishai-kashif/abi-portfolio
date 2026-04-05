import type { Person, WithContext } from 'schema-dts';

export function getPersonStructuredData(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abishai Kashif',
    alternateName: 'Abishai Kashif',
    url: 'https://abiverse.vercel.app',
    image: 'https://abiverse.vercel.app/og-image.png',
    jobTitle: 'Full-Stack Developer & AI Solutions Architect',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, Node.js, and AI-driven applications. Building luxury web experiences and intelligent AI solutions.',
    email: 'mailto:abishaikashif975@gmail.com',
    telephone: '+92-317-2648144',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'Pakistan',
    },
    sameAs: [
      'https://github.com/Abishai-kashif',
      'https://www.linkedin.com/in/abiverse/',
      'https://x.com/abishai_k11572',
      'https://www.instagram.com/abishai.kashif/',
      'https://www.facebook.com/abishai.kashif.2025/',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Python',
      'Full-Stack Development',
      'Frontend Development',
      'Backend Development',
      'AI Development',
      'Agentic AI',
      'OpenAI',
      'PostgreSQL',
      'MongoDB',
      'Tailwind CSS',
      'API Development',
      'Web Development',
      'Chatbot Development',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'GIAIC',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Devotic Labs',
    },
  };
}

export function getWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Abishai Kashif Portfolio',
    url: 'https://abiverse.vercel.app',
    description: 'Full-stack developer portfolio showcasing web development and AI solutions',
    author: {
      '@type': 'Person',
      name: 'Abishai Kashif',
    },
    inLanguage: 'en-US',
  };
}

export function getProfilePageStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: getPersonStructuredData(),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://abiverse.vercel.app',
        },
      ],
    },
  };
}
