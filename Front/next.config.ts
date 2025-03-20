const nextConfig = {
  rewrites: () => {
      return [
          {
              source: "/",
              destination: "/",

          },
          {
              source: "/meuTime",
              destination: "/time",

          },
      ]
  },
};

export default nextConfig;