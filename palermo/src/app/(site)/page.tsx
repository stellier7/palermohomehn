import { HomeHero } from "@/components/home/HomeHero";
import { HomeCategoryNav } from "@/components/home/HomeCategoryNav";
import { HomeCoverage } from "@/components/home/HomeCoverage";
import { HomeContactCta } from "@/components/home/HomeContactCta";
import { HomeServicesLinks } from "@/components/home/HomeServicesLinks";
import { HomeGallery } from "@/components/home/HomeGallery";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeLocation } from "@/components/home/HomeLocation";
import { HomeSisterBrand } from "@/components/home/HomeSisterBrand";
import { PropertyCard } from "@/components/directory/PropertyCard";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site/config";
import { buildCoverageCityCards } from "@/lib/properties/coverage-media";
import { getHomeFeaturedSlugs } from "@/lib/properties/featured";
import {
  getAllProperties,
  getPropertyBySlug,
} from "@/lib/properties/service";
import type { Property } from "@/lib/properties/types";

async function getHomeFeaturedProperties(): Promise<Property[]> {
  const slugs = await getHomeFeaturedSlugs();
  const properties = await Promise.all(
    slugs.map((slug) => getPropertyBySlug(slug)),
  );
  return properties.filter((property): property is Property => property !== undefined);
}

export default async function HomePage() {
  const featured = await getHomeFeaturedProperties();
  const allProperties = await getAllProperties();
  const coverage = buildCoverageCityCards(allProperties);
  const heroImage = siteConfig.heroImage;
  const about = siteConfig.about;

  return (
    <>
      <HomeHero heroImage={heroImage} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <RevealOnScroll>
            <p className="type-meta-caps text-accent">{about.eyebrow}</p>
            <h2 className="type-display-section mt-3 text-accent">{about.headline}</h2>
          </RevealOnScroll>
          <RevealOnScroll delayMs={100}>
            <div className="space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="prose-editorial">
                  {paragraph}
                </p>
              ))}
            </div>
          </RevealOnScroll>
        </div>
        <RevealOnScroll delayMs={140} className="mt-12 grid gap-6 sm:grid-cols-3">
          {about.trustPoints.map((point) => (
            <div key={point.label} className="border-t border-line pt-4">
              <p className="type-meta-caps text-muted">{point.label}</p>
              <p className="mt-2 font-display text-xl text-accent">{point.value}</p>
            </div>
          ))}
        </RevealOnScroll>
      </Section>

      <HomeCategoryNav />

      <Section id="featured" className="bg-[color-mix(in_srgb,var(--accent-soft)_55%,transparent)]">
        <RevealOnScroll className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="type-meta-caps text-accent">Selección</p>
            <h2 className="type-display-section mt-3 text-accent">Propiedades destacadas</h2>
            <p className="prose-editorial mt-4 max-w-xl">
              Fichas de demostración. Precios y datos reales se cargan cuando el dueño los
              confirme.
            </p>
          </div>
          <Button href="/properties" variant="primary">
            Ver todas
          </Button>
        </RevealOnScroll>
        <div className="grid gap-8 lg:gap-10">
          {featured.map((property, index) => (
            <RevealOnScroll key={property.id} delayMs={index * 80}>
              <PropertyCard property={property} priority={index === 0} />
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <HomeGallery />
      <HomeServicesLinks />
      <HomeTestimonials />
      <HomeCoverage featured={coverage.featured} secondary={coverage.secondary} />
      <HomeLocation />
      <HomeContactCta />
      <HomeSisterBrand />
    </>
  );
}
