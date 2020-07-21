[![Build Status](https://dev.azure.com/zli209/msa-2020-phase-1/_apis/build/status/a153426a.msa-2020-phase-1?branchName=master)](https://dev.azure.com/zli209/msa-2020-phase-1/_build/latest?definitionId=1&branchName=master)

# msa-2020-phase-1

# For Devops:

project url is: 
https://msa-p1-2020-loki.azurewebsites.net

The project build and release pipeline is currently similar as the given github version. 

I used the Web App application provided in the MSA 2020 github as a starting Web Application, modified it to use Mars Rover Photos APIs. 

In order to enable a continuous deployment to create releases on new commits to develop and master branches.
I use '- master' and '- develop' under 'trigger' option. 

In order to enable a continuous deployment to deploy your release to Azure for new commits to master branch.
I use create a rule in the artifacts in the release pipeline to trigger a release when a new build on master branch is avaiable.

Azure build pipeline -- done 

Azure release pipeline -- done 

A deployed website on Azure -- done, URL is displayed above 

Description -- done, please read above 

GitHub repo -- done, added. pending invite: https://github.com/a153426a/msa-2020-phase-1/invitations 

# For WebApps: 
project url is: 
https://msa-p1-2020-loki.azurewebsites.net 
Create a new typescript and react web app -- done. Did not start a new app, use the previous one and change a lot of code. 

Connect this application to a different 3rd party REST API -- done. Used Mars Rover Photos APIs from NASA. 

Allow users to input information that will be utilised by the API -- done. User can select different date to view the photo taken. 

Make use of a UI library like Material-UI. -- done. Used the gallery from material ui. 

Utilise source control through GitHub. -- done. Git history avaiable. 

Not done: 
Currently this is a private github, so I can upload the api key up. I understand this has some security issues. But the demo_key would automatically be changed into undifined in Azure. I am still trying to figure out a way to store the api key in the cloud. Might try the data path. 
