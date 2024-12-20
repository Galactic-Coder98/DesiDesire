/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https', // Specify the protocol
                hostname: 'via.placeholder.com', // Specify the domain
            },
            {
                protocol: 'https', // Supabase protocol
                hostname: 'mewinurmthovscbqwbbt.supabase.co', // Your Supabase hostname
                pathname: '/storage/v1/object/public/**', // This pattern allows access to the storage bucket objects
            },
        ],
    },
};

export default nextConfig;
