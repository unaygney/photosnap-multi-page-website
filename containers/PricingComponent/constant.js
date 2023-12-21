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
