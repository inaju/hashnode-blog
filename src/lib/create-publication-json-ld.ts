import { Publication } from "@/hashnode/generated/graphql";

export const createPublicationJsonLd = (publication: Publication) => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Blog",
    "@id": publication?.url,
    mainEntityOfPage: publication?.url,
    name: publication?.title,
    description: publication?.descriptionSEO,
    publisher: {
      "@type": publication?.isTeam ? "Organization" : "Person",
      "@id": publication?.url,
      name: publication?.title,
      image: {
        "@type": "ImageObject",
        url: publication?.preferences?.logo,
      },
    },
  };
  return schema;
};
