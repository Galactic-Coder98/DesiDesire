/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https', // Specify the protocol
                hostname: 'via.placeholder.com', // Specify the domain
            },
        ],
    },
};

export default nextConfig;
