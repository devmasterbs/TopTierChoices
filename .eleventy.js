module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/uploads");

    return {
        passthroughFileCopy: true,
        dir:{
            input: "src",
            output: "public",
        }
    }
};

