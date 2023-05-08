const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Filippo Pinton',
  authorAddress: 'filippo.pinton@thron.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'aug-pd-ckd',
  repositoryUrl: 'git@github.com:Butterneck/aug-pd-ckd.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();