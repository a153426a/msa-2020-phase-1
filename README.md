[![Build Status](https://dev.azure.com/zli209/msa-2020-phase-1/_apis/build/status/a153426a.msa-2020-phase-1?branchName=master)](https://dev.azure.com/zli209/msa-2020-phase-1/_build/latest?definitionId=1&branchName=master)

# msa-2020-phase-1

# For Devops:

project url is: 
https://msa-p1-2020-loki.azurewebsites.net

The project build and release pipeline is currently same as the given github version. 

I used the Web App application provided in the MSA 2020 github as a starting Web Application, and working on modifying it to use another third party REST API. 

In order to enable a continuous deployment to create releases on new commits to develop and master branches.
I use '- master' and '- develop' under 'trigger' option. 

In order to enable a continuous deployment to deploy your release to Azure for new commits to master branch.
I use create a rule in the artifacts in the release pipeline to trigger a release when a new build on master branch is avaiable. 

//TODO 
I would set up unit test for React app if I have enough time. 
