
# PROJET 2 : SHARE APP 

## NOM ET PRENOM :
- HACHOUR Mohammed           ```(mohammed.hachour.etu@univ-lille.fr)``` 

## QUELQUES EXPLICATIONS SUR LE PROJET : 

- J'ai réalisé une application de partage qui permet de s'authentifier et de se connecter à l'application. Les données des utilisateurs sont ajoutées à une base de données ```mongoDb``` pour que les utilisateurs puissent se reconnecter.
- L'application permet de créer un objet, de l'emprunter et de le libérer. La libération d'un objet peut se faire uniquement par celui qui l'a emprunté.
- Chaque utilisateur peut emprunter au maximum deux objets.
- Chaque utilisateur peut supprimer un objet ou plusieurs, à condition qu'ils ne soient pas en cours d'emprunt par quelqu'un d'autre.

## TESTER L'APPLICATION : 

1. Il faut d'abord récupérer le depot depuis le git en taptant la commande :
   - ```git clone git@gitlab-etu.fil.univ-lille.fr:mohammed.hachour.etu/tp-jsfs-hachour.git``` 

2. Il faut maintenant se placer dans shareApp , la racine du projet  et taper la commande : 
    1. ``` npm install ```    pour installer le dossier ```node_modules```   
    2. ``` mkdir dbData ```   pour créer le dossier dbData qui contiendra notre base de donne      
    3. ``` nodemon``` pour lancer l'application .
    4. ``` mongod --dbpath dbData ``` pour lancer notre base de donnes avec mongoDb 
    5. Aller dans un navigateur et taper  ``` http://localhost:3000/login.html ``` 





