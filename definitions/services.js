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
    repositoryUrl: 'git@github.com:diffcunha/nscaledemo-rkt.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 8000:8000 -d',
      exec: '',
      process: 'npm start'
    }
  }
};
