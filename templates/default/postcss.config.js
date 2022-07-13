// @ts-check

/**
 * @type {Partial<import('postcss-load-config').Config>} PostCSSConfig
 */
const PostCSSConfig = {
  plugins: [
    require('autoprefixer')(),
    require('@fullhuman/postcss-purgecss').default({
      content: ['./**/*.html'],
    }),
  ],
};

export default PostCSSConfig;
