/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    domains:["prod-files-secure.s3.us-west-2.amazonaws.com" ,"images.pexels.com" , "cdn.pixabay.com","images.unsplash.com", "us.123rf.com"]
  }
}

module.exports = nextConfig
