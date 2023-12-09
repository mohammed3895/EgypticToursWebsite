export const PRODUCT_CATEGORIES = [
  {
    label: "Destination",
    value: "destination" as const,
    featured: [
      {
        name: "Luxor",
        href: `/products?destination=luxor`,
        imageSrc: "/destinations/luxor.jpg",
      },
      {
        name: "Cairo",
        href: "/products?destination=cairo",
        imageSrc: "/destinations/Cairo.jpg",
      },
      {
        name: "Hurghada",
        href: "/products?destination=hurghada",
        imageSrc: "/destinations/Hurghada.jpg",
      },
      {
        name: "Alexenderia",
        href: "/products?destination=alexenderia",
        imageSrc: "/destinations/Alexandria.jpg",
      },
      {
        name: "Aswan",
        href: "/products?destination=aswan",
        imageSrc: "/destinations/aswan.jpg",
      },
    ],
  },
  // {
  //   label: "Icons",
  //   value: "icons" as const,
  //   featured: [
  //     {
  //       name: "Favorite Icon Picks",
  //       href: `/products?category=icons`,
  //       imageSrc: "/nav/icons/picks.jpg",
  //     },
  //     {
  //       name: "New Arrivals",
  //       href: "/products?category=icons&sort=desc",
  //       imageSrc: "/nav/icons/new.jpg",
  //     },
  //     {
  //       name: "Bestselling Icons",
  //       href: "/products?category=icons",
  //       imageSrc: "/nav/icons/bestsellers.jpg",
  //     },
  //   ],
  // },
];
