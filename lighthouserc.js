module.exports = {
    ci: {
      collect: {
        url: [
          'https://www.elsevier.com', // First URL
          'https://www.elsevier.com/about', // Second URL
          'https://www.elsevier.com/contact' // Third URL
        ],
        numberOfRuns: 1,
      },
      assert: {
        assertions: {
          'categories:performance': ['error', { minScore: 0.4 }],
          'categories:accessibility': ['error', { minScore: 0.7 }],
        },
      },
      upload: {
        target: 'temporary-public-storage',
      },
      status: {
        githubStatusContext: 'LightHouse Report',
      },
    },
  };
