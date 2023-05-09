const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Filippo Pinton',
  authorAddress: 'filippo.pinton@protonmail.com',
  cdkVersion: '2.78.0',
  defaultReleaseBranch: 'main',
  name: 'aug-pd-ckd',
  repositoryUrl: 'https://github.com/Butterneck/aug-pd-ckd.git',
  publishToPypi: {
    distName: 'aug_pd_cdk',
    module: 'aug_pd_cdk',
  },
});
project.synth();