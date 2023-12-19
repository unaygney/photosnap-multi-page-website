//Stories Img
import StoriesMobileImg from "@/assets/images/home/mobile/beautiful-stories.jpg";
import StoriesTabletImg from "@/assets/images/home/tablet/beautiful-stories.jpg";
import StoriesDesktopImg from "@/assets/images/home/desktop/beautiful-stories.jpg";
// Create and Share Img
import CreateMobileImg from "@/assets/images/home/mobile/create-and-share.jpg";
import CreateTabletImg from "@/assets/images/home/tablet/create-and-share.jpg";
import CreateDesktopImg from "@/assets/images/home/desktop/create-and-share.jpg";
//Designed Img
import DesignedMobileImg from "@/assets/images/home/mobile/designed-for-everyone.jpg";
import DesignedTabletImg from "@/assets/images/home/tablet/designed-for-everyone.jpg";
import DesignedDesktopImg from "@/assets/images/home/desktop/designed-for-everyone.jpg";

export const HOME_INFO = [
  {
    id: 0,
    title: "Create and share your photo stories.",
    content:
      "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    buttonDescription: "get an invite",
    images: [
      {
        mobile: CreateMobileImg,
        tablet: CreateTabletImg,
        desktop: CreateDesktopImg,
      },
    ],
  },
  {
    id: 1,
    title: "beautiful stories every time",
    content:
      "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    buttonDescription: "view the stories",
    images: [
      {
        mobile: StoriesMobileImg,
        tablet: StoriesTabletImg,
        desktop: StoriesDesktopImg,
      },
    ],
  },
  {
    id: 2,
    title: "designed for everyone.",
    content:
      "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
    buttonDescription: "view the stories",
    images: [
      {
        mobile: DesignedMobileImg,
        tablet: DesignedTabletImg,
        desktop: DesignedDesktopImg,
      },
    ],
  },
];
