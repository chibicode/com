/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["common"],
  redirects() {
    return [
      {
        source: "/factfulness-notes",
        destination: "https://note.com/chibicode/n/n908c94ee8882",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
