import { Helmet } from "react-helmet-async";
import { SITE_TITLE, SITE_DESCRIPTION } from "../utils/constants";

function Meta({ title, description }) {
  return (
    <Helmet>
      <title>{title || SITE_TITLE}</title>
      <meta
        name="description"
        content={description || SITE_DESCRIPTION}
      />
      <meta name="author" content="Samual Molla" />
      <meta property="og:title" content={title || SITE_TITLE} />
      <meta
        property="og:description"
        content={description || SITE_DESCRIPTION}
      />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default Meta;
