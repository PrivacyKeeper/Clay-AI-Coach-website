import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export default function sitemap(): MetadataRoute.Sitemap {
  const headersList = headers();
  const host = headersList.get('x-forwarded-host') ?? 'clayaicoach.com';
  const protocol = 'https';
  const siteUrl = `${protocol}://${host}`;

  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-05-21'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
