import Script from 'next/script';
import {
  getPersonStructuredData,
  getWebsiteStructuredData,
  getProfilePageStructuredData,
} from '@/lib/structured-data';

export function StructuredData() {
  const personData = getPersonStructuredData();
  const websiteData = getWebsiteStructuredData();
  const profilePageData = getProfilePageStructuredData();

  return (
    <>
      <Script
        id="person-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <Script
        id="profile-page-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageData),
        }}
      />
    </>
  );
}
