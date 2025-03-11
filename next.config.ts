import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/anonymous",
        destination: "https://getmsg.netlify.app/sahed",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
