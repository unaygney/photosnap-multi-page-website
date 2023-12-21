import HeroMobile from "@/assets/images/pricing/mobile/hero.jpg";
import HeroTablet from "@/assets/images/pricing/tablet/hero.jpg";
import HeroDesktop from "@/assets/images/pricing/desktop/hero.jpg";

export const HERO_INFO = {
  title: "Pricing",
  content:
    "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
  images: [
    {
      mobile: HeroMobile,
      tablet: HeroTablet,
      desktop: HeroDesktop,
    },
  ],
};

export const PRICING_CARD = [
  {
    id: 0,
    title: "Basic",
    monthly: 19,
    yearly: 190,
    content:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
  },
  {
    id: 1,
    title: "Pro",
    monthly: 39,
    yearly: 390,
    content:
      "More advanced features available. Recommended for photography veterans and professionals.",
  },
  {
    id: 2,
    title: "Business",
    monthly: 99,
    yearly: 990,
    content:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
  },
];

export const COMPARE_TABLE = [
  {
    method: "Basic",
    features: {
      UNLIMITED_STORY_POSTING: true,
      UNLIMITED_PHOTO_UPLOAD: true,
      EMBEDDING_CUSTOM_CONTENT: false,
      CUSTOMIZE_METADATA: false,
      ADVANCED_METRICS: false,
      PHOTO_DOWNLOADS: false,
      SEARCH_ENGINE_INDEXING: false,
      CUSTOM_ANALYTICS: false,
    },
  },
  {
    method: "Standard",
    features: {
      UNLIMITED_STORY_POSTING: true,
      UNLIMITED_PHOTO_UPLOAD: true,
      EMBEDDING_CUSTOM_CONTENT: true,
      CUSTOMIZE_METADATA: true,
      ADVANCED_METRICS: false,
      PHOTO_DOWNLOADS: false,
      SEARCH_ENGINE_INDEXING: false,
      CUSTOM_ANALYTICS: false,
    },
  },
  {
    method: "Premium",
    features: {
      UNLIMITED_STORY_POSTING: true,
      UNLIMITED_PHOTO_UPLOAD: true,
      EMBEDDING_CUSTOM_CONTENT: true,
      CUSTOMIZE_METADATA: true,
      ADVANCED_METRICS: true,
      PHOTO_DOWNLOADS: true,
      SEARCH_ENGINE_INDEXING: true,
      CUSTOM_ANALYTICS: true,
    },
  },
];
