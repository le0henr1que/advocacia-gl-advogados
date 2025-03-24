/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist", // Use um subdiretório para saída
  assetPrefix: "./", // Garante que os caminhos sejam relativos
};

module.exports = nextConfig;
