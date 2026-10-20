import type { MetadataRoute } from "next";
import { allServices, serviceAreas } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

// Service and area pages are generated automatically from lib/data.ts
// (allServices / serviceAreas), so adding a new service or area there is
// picked up here with no further changes. A brand-new top-level page (not
// a service or an area) needs its path added to staticRoutes/legalRoutes
// below by hand, since Next.js can't infer sitemap inclusion/priority from
// the file system alone.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about-us", "/services", "/areas", "/contact-us"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const legalRoutes = ["/privacy-policy", "/terms-and-conditions", "/cookies-policy"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  const serviceRoutes = allServices.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const areaRoutes = serviceAreas
    .filter((area) => area.slug !== "")
    .map((area) => ({
      url: `${SITE_URL}${area.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...legalRoutes];
}
