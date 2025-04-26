module.exports = {
    ci: {
      collect: {
        url: ['https://www.flipkart.com'],
        numberOfRuns: 3,
      },
      assert: {
        assertions: {
          'categories:performance': ['error', { minScore: 0.9 }],
          'categories:accessibility': ['error', { minScore: 0.9 }],
        },
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };
