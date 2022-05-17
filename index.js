const critical = require('critical');

critical.generate({
  base: '/',
  src: 'index.html',
  dimensions: [
    {
      height: 667,
      width: 375,
    },
    {
      height: 768,
      width: 1024
    },
    {
      height: 1000,
      width: 1920,
    },
  ],
})
  .then(({css, html, uncritical}) => {
    // You now have critical-path CSS as well as the modified HTML.
    // Works with and without target specified.
    console.log(css)

  })
