import React, { useEffect } from 'react';

export default function SEO({ title, description, keywords, image }) {
  const siteTitle = "Saran Developers | Luxury Real Estate & Construction";
  const defaultDescription = "Saran Developers showcases a legacy of luxury living, featuring high-end residential developments, architectural excellence, and premium construction standards.";
  const defaultKeywords = "luxury real estate, custom homes, construction details, architecture, Saran Developers, premium materials";

  useEffect(() => {
    // Update Title
    document.title = title ? `${title} | Saran Developers` : siteTitle;

    // Update Meta Tags
    const metaTags = {
      description: description || defaultDescription,
      keywords: keywords || defaultKeywords,
      "og:title": title || siteTitle,
      "og:description": description || defaultDescription,
      "og:image": image || "",
      "twitter:title": title || siteTitle,
      "twitter:description": description || defaultDescription,
      "twitter:image": image || ""
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content) return;
      
      // Try to find existing tag
      let element = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    return () => {
      // Optional: Cleanup or revert could go here, but usually not needed for simple page transitions
    };
  }, [title, description, keywords, image]);

  return null;
}