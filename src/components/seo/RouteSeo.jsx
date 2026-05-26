import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { webDevelopmentFaqs, webDevelopmentSeo } from '../../content/webDevelopmentService';
import { seoFaqs, seoSeo } from '../../content/seoService';
import { paidAdsFaqs, paidAdsSeo } from '../../content/paidAdsService';
import { brandIdentityFaqs, brandIdentitySeo } from '../../content/brandIdentityService';
import { digitalMarketingFaqs, digitalMarketingSeo } from '../../content/digitalMarketingService';
import { automationFaqs, automationSeo } from '../../content/automationService';

const defaultSeo = {
  title: 'INCREGO | Digital Growth and Strategy Agency',
  description:
    'INCREGO is a digital growth and strategy agency building premium websites, brands, and digital experiences for modern businesses.',
  keywords:
    'digital agency, web design agency, web development services, branding agency, SEO services, UX design agency',
  robots: 'index, follow',
  type: 'website',
};

const routeSeo = {
  '/': defaultSeo,
  '/about': {
    title: 'About INCREGO | Strategy-First Digital Agency',
    description:
      'Learn how INCREGO helps modern brands connect strategy, design, and engineering to build digital products that feel sharp and perform well.',
    keywords:
      'about incrego, digital strategy agency, product design agency, web development team, creative technology studio',
  },
  '/services': {
    title: 'Digital Services | Web Development, UX, Branding and Growth | INCREGO',
    description:
      'Explore INCREGO digital services including web development, UI and UX design, branding, mobile experiences, digital marketing, and technical advisory.',
    keywords:
      'digital services, web development, ui ux design, branding services, digital marketing agency, mobile app development',
  },
  '/services/web-development': {
    ...webDevelopmentSeo,
    schema: (url) => [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Web Development Services',
        serviceType: 'Custom Web Development',
        provider: {
          '@type': 'Organization',
          name: 'INCREGO',
          url: new URL('/', url).toString(),
        },
        areaServed: 'Worldwide',
        description: webDevelopmentSeo.description,
        url,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: new URL('/', url).toString(),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: new URL('/services', url).toString(),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Web Development',
            item: url,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: webDevelopmentFaqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  },
  '/services/seo': {
    ...seoSeo,
    schema: (url) => [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'SEO & Search Strategy',
        serviceType: 'Search Engine Optimization',
        provider: {
          '@type': 'Organization',
          name: 'INCREGO',
          url: new URL('/', url).toString(),
        },
        areaServed: 'Worldwide',
        description: seoSeo.description,
        url,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: new URL('/', url).toString(),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: new URL('/services', url).toString(),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'SEO & Search Strategy',
            item: url,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: seoFaqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  },
  '/services/paid-ads': {
    ...paidAdsSeo,
    schema: (url) => [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Paid Advertising & PPC',
        serviceType: 'Performance Marketing',
        provider: {
          '@type': 'Organization',
          name: 'INCREGO',
          url: new URL('/', url).toString(),
        },
        areaServed: 'Worldwide',
        description: paidAdsSeo.description,
        url,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: new URL('/', url).toString(),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: new URL('/services', url).toString(),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Paid Advertising',
            item: url,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: paidAdsFaqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  },
  '/services/brand-identity': {
    ...brandIdentitySeo,
    schema: (url) => [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Brand Identity & Visual Design',
        serviceType: 'Branding Services',
        provider: {
          '@type': 'Organization',
          name: 'INCREGO',
          url: new URL('/', url).toString(),
        },
        areaServed: 'Worldwide',
        description: brandIdentitySeo.description,
        url,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: new URL('/', url).toString(),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: new URL('/services', url).toString(),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Brand Identity',
            item: url,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: brandIdentityFaqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  },
  '/services/digital-marketing': {
    ...digitalMarketingSeo,
    schema: (url) => [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Digital Marketing & Growth',
        serviceType: 'Marketing Services',
        provider: {
          '@type': 'Organization',
          name: 'INCREGO',
          url: new URL('/', url).toString(),
        },
        areaServed: 'Worldwide',
        description: digitalMarketingSeo.description,
        url,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: new URL('/', url).toString(),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: new URL('/services', url).toString(),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Digital Marketing',
            item: url,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: digitalMarketingFaqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  },
  '/services/automation': {
    ...automationSeo,
    schema: (url) => [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Business Automation & AI',
        serviceType: 'Automation Services',
        provider: {
          '@type': 'Organization',
          name: 'INCREGO',
          url: new URL('/', url).toString(),
        },
        areaServed: 'Worldwide',
        description: automationSeo.description,
        url,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: new URL('/', url).toString(),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: new URL('/services', url).toString(),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Automation & AI',
            item: url,
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: automationFaqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  },
  '/contact': {
    title: 'Contact INCREGO | Start Your Next Digital Project',
    description:
      'Contact INCREGO to discuss website development, design, branding, or digital growth support for your next project.',
    keywords:
      'contact digital agency, website project inquiry, web development consultation, branding consultation',
  },
};

const fallbackSeo = {
  title: 'Page Not Found | INCREGO',
  description: 'The page you are looking for could not be found.',
  keywords: 'page not found, 404',
  robots: 'noindex, nofollow',
  type: 'website',
};

const ensureMetaTag = (attribute, key) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  return element;
};

const setMetaContent = (attribute, key, value) => {
  const element = ensureMetaTag(attribute, key);
  element.setAttribute('content', value);
};

const setCanonical = (href) => {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

const setStructuredData = (schema) => {
  const selector = 'script[data-route-schema="true"]';
  const existing = document.head.querySelector(selector);

  if (!schema) {
    existing?.remove();
    return;
  }

  const element = existing ?? document.createElement('script');
  element.setAttribute('type', 'application/ld+json');
  element.setAttribute('data-route-schema', 'true');
  element.textContent = JSON.stringify(schema);

  if (!existing) {
    document.head.appendChild(element);
  }
};

export const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = routeSeo[pathname] ?? fallbackSeo;
    const canonicalUrl = new URL(pathname, window.location.origin).toString();
    const schema = typeof seo.schema === 'function' ? seo.schema(canonicalUrl) : seo.schema;

    document.title = seo.title;
    document.documentElement.lang = 'en';

    setMetaContent('name', 'description', seo.description);
    setMetaContent('name', 'keywords', seo.keywords ?? defaultSeo.keywords);
    setMetaContent('name', 'robots', seo.robots ?? defaultSeo.robots);
    setMetaContent('name', 'theme-color', '#3b82f6');
    setMetaContent('property', 'og:site_name', 'INCREGO');
    setMetaContent('property', 'og:type', seo.type ?? defaultSeo.type);
    setMetaContent('property', 'og:title', seo.title);
    setMetaContent('property', 'og:description', seo.description);
    setMetaContent('property', 'og:url', canonicalUrl);
    setMetaContent('name', 'twitter:card', 'summary');
    setMetaContent('name', 'twitter:title', seo.title);
    setMetaContent('name', 'twitter:description', seo.description);

    setCanonical(canonicalUrl);
    setStructuredData(schema);
  }, [pathname]);

  return null;
};
