module.exports = {
    ci: {
      collect: {
        url: ['https://www.flipkart.com'],
        numberOfRuns: 3,
      },
      assert: {
        assertions: {
          'first-contentful-paint': ['error', { minScore: 0.9 }],
          'interactive': ['error', { minScore: 0.9 }],
          'speed-index': ['error', { maxNumericValue: 3000 }],
          'total-blocking-time': ['error', { maxNumericValue: 200 }],
          'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
          'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        },
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };
  