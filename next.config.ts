import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    sassOptions: {
        additionalData: `@use "src/styles/_variables.scss" as *;`,
    },
    env: {
        PORT: '2020',
    },
};

export default nextConfig;
