module.exports = {
  devServer: {
    hot: true,
  },
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => {
        return {
          limit: 8192, // 이미지 파일 크기에 따라 base64로 인코딩 여부 결정
          name: "img/[name].[hash:8].[ext]", // 파일 저장 경로 설정
        };
      });
  },
};
