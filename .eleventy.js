module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/output.css");
  

  return {
    dir: {
      input: "src",         // root input directory
      includes: "layouts",  // The subdirectory for layouts within the input directory
    }
  };
};
