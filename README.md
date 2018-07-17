## Overview
Matt Christianson's Front end Case Study for Target

# My Retail Angular Store Front
This Angular storefront was built with Angular 5.

##### Clone the repository
```
> git clone git@github.com:mchristianson/my-retail-client.git
> cd my-retail-client
```

#### Install Angular CLI
`> npm install -g @angular/cli`

#### Run the app

`> ng serve -o`

Browse to:

[http://localhost:4200/product/15117729](http://localhost:4200/product/15117729)

[http://localhost:4200/product/13860428](http://localhost:4200/product/13860428)

#### Run the functional tests
`> ng e2e`

#### Externally running instance

Product with _$129.99_ price & both buttons visible [View product #15117729](http://my-retail.smd-test.com/product/15117729)

Product with _$139.99_ price & only add to cart button visible: [View product #13860428](http://my-retail.smd-test.com/product/13860428)

## Continuous Delivery Flow
![ci-flow](https://raw.githubusercontent.com/mchristianson/my-retail-client/ci-flow.png)
1. Developer starts to work on a new feature and will create a feature branch from the `develop` branch.
1. Developer will continue to push code to branch. CI will build/test/assemble deployable artifacts and make available to deploy to QA environment. 
1. Continually merge latest from `develop` branch
1. After feature has been completed, demonstrate to QA and Product Owner
1. Issue pull request for other developers to approve changes.
1. Other developers can deploy artifacts to QA or local environment.
1. Once approved other developer will approve pull request and changes will be merged into the `develop` branch.
1. `feature` branch will be automatically deleted.
1. QA team will continually deploy artifacts from the `develop` branch and test the changes in an integration environment.
1. After a release has been identified and deemed ready and cut off, the `develop` branch is merged into the `release` branch to create a release candidate.
1. QA team will deploy and test the artifacts from the `release` branch.
1. If bug is found, developer will create a `bugfix` branch off of the `release` branch and commit changes along with a pull request to the `release` branch.
1. The `release` branch will be continually merged into the `develop` branch.
1. A full regression test will be run on that branch.
1. When the release is approved by QA, the `release` branch is merged into the `master` branch and is tagged with the version number.
1. The artifacts as built from the tag will be deployed to the production branch.
1. If a defect is identified in production that is low risk, a `hotfix` branch will be created off of the `master` branch and changes will be committed to that branch.
1. Any changes to the `hotfix` branch will be merged back into the `develop` branch and any new `release` branches that have been created.
 


> * CI would watch all branches and build, test and assemble production-ready artifacts from the source code in the same manner.
> * Alert individuals on failed feature branches. Alert all developers on `develop`, `master`, `hotfix` and `release` branches.
> * These packages would be uploaded to a central repository where they could be manually (CodeDeploy) pushed out to any test environment.
