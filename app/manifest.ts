import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VibraFlow Industrial Feeding Systems",
    short_name: "VibraFlow",
    description: "Vibratory bowl feeders and automated feeding systems for industrial automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B2D5C",
    icons: [
      {
        src: "/images/product-machine.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
