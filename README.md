How to Setup the Project
==============================

1. First of all need set ProjectId and Google authenticate using Google Cloud SDK.
=> https://cloud.google.com/sdk/docs/install#windows

2. Need to Create service account in Google cloud. Here is the link for create service account.
=> https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts/create?supportedpurview=project&_ga=2.188829545.372332030.1652691111-1647748651.1639736669&_gac=1.150470212.1652425964.Cj0KCQjw4PKTBhD8ARIsAHChzRKA6ouvxvFrxCWdZUzoexbUNgpO7AuOOmniQ0chs5art94Duvm3vcIaAuo1EALw_wcB

3. Select your project Or Create new project.

4. In the Service account name field, enter a name. The Cloud console fills in the Service account ID field based on this name.

5. To provide access to your project, grant the following role(s) to your service account: Project > Owner. 

6. After that Create a service account key.
	A - In the Cloud console, click the email address for the service account that you created.
	B - Click Keys.
	C - Click Add key, and then click Create new key.
	D - Click Create. A JSON key file is downloaded to your computer.
	E - Click Close.
	
7. Set Google application json file in project.
=> set GOOGLE_APPLICATION_CREDENTIALS="json file path"

8. In your system environment variable need to set some things.
=> In User variable for admin
=> https://prnt.sc/EZr2QBLhXgBV

=> In System variables
=> https://prnt.sc/Mlz7GyLI2tEu

9. After that need to add ProjectId set(That create in Google cloud).
=> gcloud config set project {{ProjectId}}

10. After that You need to login via command 
=> gcloud auth application-default login

11. Congratulation Project is set-up.

12. For setup and run project hit below command:
=> Install node module: npm i
=> Run the Project: npm start