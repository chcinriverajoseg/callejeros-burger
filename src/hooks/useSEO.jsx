// src/hooks/useSEO.jsx
// Crea la carpeta src/hooks/ si no existe y coloca este archivo ahí.
import { Helmet } from "react-helmet-async";

const SITE_NAME   = "Callejero Burger";
const DEFAULT_IMG = "https://callejeroburger.cl/og-image.jpg";
const DEFAULT_URL = "https://callejeroburger.cl";

export default function useSEO({ title, description, image, url } = {}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Las mejores burgers callejeras`;
  const metaDesc = description || "Hamburguesas, combos, snacks y bebidas con estilo urbano. Pide online o reserva tu mesa.";
  const metaImg  = image || DEFAULT_IMG;
  const metaUrl  = url   || DEFAULT_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description"        content={metaDesc} />
      <link rel="canonical"           href={metaUrl} />
      <meta property="og:type"        content="website" />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image"       content={metaImg} />
      <meta property="og:url"         content={metaUrl} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image"       content={metaImg} />
    </Helmet>
  );
}
