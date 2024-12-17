## Amélioration de l'Accessibilité - Projet

Ce projet vise à améliorer l'accessibilité d'un site web en suivant les meilleures pratiques d'accessibilité pour les utilisateurs de technologies d'assistance telles que les lecteurs d'écran. Nous avons appliqué des modifications spécifiques pour rendre le contenu plus structuré, compréhensible et navigable.

## Objectifs du projet

L'objectif principal de ce projet était d'appliquer des modifications de structure et de sémantique HTML pour améliorer l'accessibilité, notamment pour les utilisateurs qui naviguent avec des lecteurs d'écran, ainsi que pour ceux utilisant d'autres technologies d'assistance.

## Modifications effectuées

Les modifications suivantes ont été appliquées dans plusieurs fichiers HTML du projet pour améliorer l'accessibilité :

## 1. Ajout de liens de saut (Skip Links)

Dans le fichier fix-a11y/01-index.html, des liens de saut ont été ajoutés pour permettre aux utilisateurs de sauter directement à la navigation principale et au contenu principal. Cela permet de naviguer plus facilement sans avoir à parcourir tout le contenu de la page.

Ajout d'une balise <nav> pour les liens de saut.
Création de liens permettant de passer directement à la navigation principale et au contenu.

## 2. Amélioration du contraste

Dans fix-a11y/02-index.html, des modifications ont été apportées pour améliorer le contraste des éléments de la page, en retirant certaines propriétés CSS qui nuisaient à la lisibilité, telles que les opacités trop faibles.

## 3. Définition de la langue du document

Dans fix-a11y/03-index.html, l'attribut lang="en" a été ajouté à la balise <html> pour indiquer la langue principale du document. Cela permet aux lecteurs d'écran de détecter la langue et d'adapter leur sortie en conséquence.

## 4. Ajout d'alt pour les images

Dans fix-a11y/04-index.html, des descriptions alternatives (attributs alt) ont été ajoutées aux images importantes :

Logo : Ajout d'une description de l'image du logo.
Image décorative : L'attribut alt a été laissé vide pour les images purement décoratives.

## 5. Amélioration des formulaires

Dans fix-a11y/05-index.html, un label a été ajouté pour le champ de saisie de l'email, et des attributs supplémentaires tels que autocomplete, required et aria-required ont été ajoutés pour améliorer l'interaction avec les utilisateurs de technologies d'assistance.

## 6. Ajout de labels accessibles pour les icônes sociales

Dans fix-a11y/06-index.html, des aria-label ont été ajoutés aux liens contenant des icônes sociales (comme Facebook et Twitter) pour fournir des informations utiles aux utilisateurs de lecteurs d'écran.

## 7. Retrait de user-scalable=no

Dans fix-a11y/07-index.html, l'attribut user-scalable="no" a été supprimé de la balise <meta viewport>. Cela permet aux utilisateurs de zoomer sur le contenu de la page, ce qui est essentiel pour l'accessibilité.

## 8. Correction des balises de titre (<h1>, <h2>, etc.`)

Dans fix-a11y/08-index.html, des corrections ont été apportées à la hiérarchie des titres pour garantir une structure logique et hiérarchique des titres. Les balises <h1>, <h2>, <h3>, etc., ont été utilisées correctement pour améliorer la navigation et la compréhension du contenu.

## 9. Conversion des éléments de navigation et des sections en balises sémantiques

Dans fix-a11y/09-index.html, les éléments suivants ont été modifiés pour utiliser des balises HTML5 sémantiques :

<div class="header"> transformé en <header>.
<div class="nav"> transformé en <nav>.
Les sections du contenu ont été encapsulées dans une balise <main>.
Les balises <footer> et <section> ont été utilisées pour structurer correctement les sections du site.
## 10. Transformation des éléments en listes
Dans fix-a11y/10-index.html, plusieurs éléments ont été convertis en listes appropriées pour améliorer l'organisation et la lisibilité :

La navigation a été transformée en une liste (<ul>) avec des éléments de liste (<li>).
Les packages ont été transformés en une liste non ordonnée.
Outils utilisés
Axe et Lighthouse : Outils d'audit d'accessibilité utilisés pour détecter les problèmes et tester la conformité.
Landmarks Extension : Extension pour identifier les zones de repère (landmarks) sur la page.
HeadingsMap Extension : Extension pour visualiser la hiérarchie des titres dans le contenu.
Conclusion
Ces modifications ont permis de résoudre environ 50 % des problèmes d'accessibilité détectés par les outils automatiques. Il reste des problèmes manuels à résoudre, qui peuvent être testés à l'aide d'outils de lecture d'écran ou en lisant directement le code. L'objectif est d'assurer une navigation fluide et une meilleure compréhension du contenu pour tous les utilisateurs, quel que soit leur mode de navigation
