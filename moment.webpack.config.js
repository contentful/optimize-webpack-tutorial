const { IgnorePlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  plugins: [
   new IgnorePlugin({
    checkResource(resource, context) {
      console.log(context)
      if(context.includes('/moment/locale')){
        
        // Keep en-gb only
        return resource.includes('en-gb') ? false : true;
      }
      // Don't ignore if not part of a Moment locale
      return false;
    }
  }),
 ],
};
