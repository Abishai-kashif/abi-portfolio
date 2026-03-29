import type { Person, WithContext } from 'schema-dts';

export function getPersonStructuredData(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abishai K.',
    alternateName: 'Abishai Kashif',
    url: 'https://[YOUR-DOMAIN].com',
    image: 'https://[YOUR-DOMAIN].com/og-image.png',
    jobTitle: 'Full-Stack Developer & AI Solutions Architect',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, Node.js, and AI-driven applications. Building luxury web experiences and intelligent AI solutions.',
    email: 'mailto:[YOUR-EMAIL]',
    telephone: '[YOUR-PHONE]',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '[YOUR-CITY]',
      addressCountry: '[YOUR-COUNTRY]',
    },
    sameAs: [
      'https://github.com/Abishai-kashif',
      'https://www.linkedin.com/in/abi-x-me/',
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
    name: 'Abishai K. Portfolio',
    url: 'https://[YOUR-DOMAIN].com',
    description: 'Full-stack developer portfolio showcasing web development and AI solutions',
    author: {
      '@type': 'Person',
      name: 'Abishai K.',
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
          item: 'https://[YOUR-DOMAIN].com',
        },
      ],
    },
  };
}
