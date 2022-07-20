import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'nx-react-code-sharing title',
  siteName: 'nx-react-code-sharing sitename',
  description: 'nx-react-code-sharing description',
  url: 'http://example.com/',
  type: 'website',
  robots: 'follow, index',
  /**
   * large-og image
   * path: /public/images/large-og.png
   */
  image: 'https://via.placeholder.com/1600x630.png',
  twitter: {
    site: '@BoBeenLee', // ex) twiiterId @BoBeenLee
  },
};

type SEOProps = {
  article?: {
    date: string;
    author: string;
  };
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function SEO(props: SEOProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={meta.twitter.site} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.article && (
        <>
          <meta property="article:published_time" content={meta.article.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.article.date}
          />
          <meta
            name="author"
            property="article:author"
            content={meta.article.author}
          />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

// you can generate your own from https://www.favicon-generator.org/
const favicons: Array<Favicons> = [
  {
    rel: 'shortcut icon',
    href: '/favicons/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicons/apple-icon-180x180.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicons/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicons/manifest.json',
  },
];
