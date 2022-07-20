import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  SEO as SharedSEO,
  SEOProps as SharedSEOProps,
} from '@nx-react-code-sharing/shared-ui-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SEOProps extends SharedSEOProps {}

export default function SEO(props: SEOProps) {
  const router = useRouter();

  return (
    <Head>
      <SharedSEO {...props} asPath={router.asPath} />
    </Head>
  );
}
