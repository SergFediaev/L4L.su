import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://l4l.su',
			lastModified: new Date(),
			changeFrequency: 'hourly',
			priority: 1,
		},
	]
}
