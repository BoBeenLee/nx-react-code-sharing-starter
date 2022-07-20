import React from 'react';
import SEO, { SEOProps } from './seo';

interface LayoutProps {
  seoProps?: SEOProps;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { seoProps, children } = props;
  return (
    <>
      <SEO {...seoProps} />
      {children}
    </>
  );
}
