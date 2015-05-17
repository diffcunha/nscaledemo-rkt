exports.root = {
  type: 'blank-container'
};

exports.web = {
  type: 'rocket',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/diffcunha/node-hello.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 8000:8000 -d',
      exec: '',
      process: 'npm start'
    }
  }
};
