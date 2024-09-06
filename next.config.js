/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { dev }) {
        if (dev) {
          config.devtool = 'cheap-module-source-map'; // Safer alternative for development
        }
        return config;
      },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                  {
                    key: 'Content-Security-Policy',
                    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://sandbox.payhere.lk; connect-src 'self' https://sandbox.payhere.lk http://localhost:3001; img-src 'self'; style-src 'self' 'unsafe-inline'; frame-src https://sandbox.payhere.lk;",
                  },
                ],
              },
        ];
      },
    images: {
        domains: ['via.placeholder.com'],
    }
}

module.exports = nextConfig
