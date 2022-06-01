module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "./src/Style/Var.scss";
        `
      }
    }
  }
}
