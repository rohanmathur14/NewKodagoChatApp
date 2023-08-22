const dotenv = require("dotenv");
const webpack = require("webpack");
dotenv.config();

module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
        // Add ESM support for .mjs files in webpack 4
        config.resolve.fallback = {
            ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped. Doesn't make much sense, but how it is
            fs: false, // the solution
        };

        return config;
    },
    images:
    {
        domains: ['*', 'localhost','s3.ap-south-1.amazonaws.com','www.kodago.com'],
        //formats: ['image/webp'],
        imageSizes: [48, 64, 88, 96, 128, 256, 384, 416],
    },
    env: {
        BASE_URL: process.env.BASE_URL,
        
    }
}
