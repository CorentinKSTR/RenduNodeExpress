# Projet Node.js avec Express

Ce projet Node.js est construit avec Express et comprend l'intégration de trois bibliothèques clés pour améliorer la sécurité et la gestion des processus.

## Librairies incluses

- **Helmet** : Helmet est utilisé pour sécuriser l'application en configurant des en-têtes HTTP sécurisés pour prévenir les vulnérabilités web.

- **Morgan** : Morgan est un middleware de journalisation des requêtes HTTP, permettant de surveiller l'activité du serveur en enregistrant les détails des requêtes.

- **PM2** : PM2 (Process Manager 2) est un gestionnaire de processus Node.js qui facilite le déploiement, la gestion et le monitoring des applications Node.js en production.

## Commandes

- `npm install` : Pour installer les dépendances du projet.

- `npm start` : Pour lancer le serveur Node.js.

- `npm stop` : Pour arrêter le serveur Node.js.

## CRUD

Pour effectuer des opérations CRUD, vous pouvez utiliser les scripts Python fournis.

## Authentification

L'authentification est nécessaire pour créer un Pokémon. Veuillez vous connecter pour accéder à cette fonctionnalité.

- Pour créer un compte utilisateur, utilisez le fichier `requestcreate.py` situé dans le dossier "User". Il vous permettra de créer un compte.
- Pour vous connecter à votre compte, utilisez le fichier `requestlogin.py` également situé dans le dossier "User".
- Une fois connecté avec succès, un jeton d'authentification vous sera fourni. Vous devrez placer ce jeton dans les "headers" de vos requêtes pour créer et supprimer des Pokémons.


