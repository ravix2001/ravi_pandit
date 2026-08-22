import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

const SITE = "https://www.ravi-pandit.com.np";

export function Seo({ title, description, path }: SeoProps) {
  const fullTitle = `${title} — Ravi Pandit`;
  const url = `${SITE}${path}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${SITE}/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE}/og-image.png`} />
    </Helmet>
  );
}
