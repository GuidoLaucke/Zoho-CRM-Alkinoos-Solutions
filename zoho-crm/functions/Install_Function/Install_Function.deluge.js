void ExtensionAction.Install_Function(map installParamMap)
{
orgid = input.installParamMap.get("organizationId");
installerid = input.installParamMap.get("installerId");
isInstall = input.installParamMap.get("isInstall");
pversion = input.installParamMap.get("previousVersion");
email_content = "Zoho FSM for Zoho CRM Extension Installed<br><br>";
email_content = email_content + "Admin : " + zoho.adminuserid + "<br>";
email_content = email_content + "Login User : " + zoho.loginuserid + "<br>";
email_content = email_content + "Org Id : " + orgid + "<br>";
email_content = email_content + "Installer Id : " + installerid + "<br>";
email_content = email_content + "Is Install : " + isInstall + "<br>";
email_content = email_content + "Previous Version : " + pversion + "<br><br>";
sendmail
[
	from :zoho.adminuserid
	to :"fsmteam-pm-notification@zohocorp.com"
	cc:"krishanth.r+extension@zohotest.com,hrithick.cs+extension@zohotest.com"
	subject :"[Internal Notify] Zoho FSM for Zoho CRM Extension Installed"
	message :email_content
]
}