response.content = response.content.replace(new RegExp("https://<applicationName><userId>trial.hanatrial.ondemand.com:443/JobEnrollmentDemo/odata.srv",'g'),"https://trial.apim1.hanatrial.ondemand.com:443/<userId>trial/v1/jobpublic");