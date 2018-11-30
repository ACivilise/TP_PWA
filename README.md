TP_Angular_PWA 

Nous allons mettre en place une progressive web app.

forcer l’utlisation de sass: ng config --global defaults.styleExt=scss
ng config schematics.@schematics/angular:component.styleext scss





Installation de l’angular CLI :
npm install -g @angular/cli
Création d’un nouveau projet angular :
ng new tp-pwa

ng add @angular/pwa --project tp-pwa


https://angular.io/guide/service-worker-getting-started

Pour utiliser le service worker :
Build :
ng build --prod
Installer http-server:
npm install http-server -g
Lancement :
http-server -p 8080 -c-1 dist/tp-pwa

Pour dev : ng serve

Pour modifier le comportement du service worker, il suffit de modifier le fichier ngsw-config.json

https://medium.com/@amcdnl/service-worker-pwas-with-the-angular-cli-98a8f16d62d6

//npm i @angular/service-worker --S

Service worker : https://makina-corpus.com/blog/metier/2016/decouvrir-le-service-worker

Il serait possible d’utiliser Ionic pour faire une PWA avec stencil :
Création/Modification du fichier : npm init stencil
On lance l’appli avec NodeJs : npm start
//https://openclassrooms.com/fr/courses/4668271-developpez-des-applications-web-avec-angular/5088826-gerez-la-navigation-avec-le-routing

