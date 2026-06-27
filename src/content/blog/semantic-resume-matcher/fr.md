---
title: "Création d'un comparateur de CV sémantique: hors ligne, privé et vraiment intelligent"
description: "Comment j'ai construit un système de correspondance de CV entièrement local et alimenté par l'IA qui respecte la confidentialité des données, élimine les coûts des API cloud et va bien au-delà de la simple recherche par mots-clés."
date: 2026-06-26
tags: ["AI", "Postgres", "FastAPI", "React"]
---

Le recrutement à grande échelle est défaillant. Non pas parce que les entreprises manquent de candidats, mais parce que les outils utilisés pour identifier les bons profils sont d'une simplicité embarrassante pour 2026. J'ai créé **Semantic Resume Matcher** pour résoudre ce problème, et ce, entièrement hors ligne.

## Le problème des ATS traditionnels

Si vous avez déjà postulé à un emploi et n'avez reçu aucune réponse alors que vous étiez manifestement qualifié, vous avez presque certainement été rejeté par un système de suivi des candidats (ATS), et non par un être humain. Ces systèmes fonctionnent en analysant les CV à la recherche de correspondances exactes de mots-clés par rapport à une description de poste. Si un candidat écrit "conception de pipelines distribués" et que l'offre d'emploi mentionne "expérience en ingénierie de données", le système ne détecte aucun chevauchement. Le candidat est filtré avant même qu'un recruteur ne voie son profil.

Ce n'est pas seulement préjudiciable pour les candidats, cela l'est aussi pour les entreprises. Les vrais talents passent entre les mailles du filet parce qu'une machine ne peut pas comprendre le *sens*, mais seulement l'orthographe.

## Le problème du Cloud et de l'IA

La solution évidente (utiliser un LLM pour comprendre les CV) introduit un nouvel ensemble de problèmes. Les CV comptent parmi les documents les plus sensibles qu'une personne possède. Ils contiennent des noms légaux complets, des adresses, l'historique des emplois et parfois des attentes salariales. L'envoi de ces données à une API cloud tierce (OpenAI, Anthropic, Gemini) est un terrain miné pour le RGPD et représente un risque juridique direct dans de nombreuses juridictions.

À cela s'ajoute le coût: exécuter des inférences de LLM sur des milliers de CV aux tarifs des API cloud devient très vite prohibitif. Vous payez par jeton pour des données qui ne vous appartiennent pas, traitées sur une infrastructure que vous ne contrôlez pas.

## La solution: locale, sémantique et explicable

Semantic Resume Matcher est un système d'analyse et de correspondance des CV par rapport aux offres d'emploi de niveau entreprise qui fonctionne **entièrement sur votre propre machine**. Aucune donnée ne quitte jamais votre réseau local. Il combine trois techniques qui, ensemble, produisent un résultat réellement utile:

1. **Extraction structurée alimentée par LLM**: un modèle local (Gemma 3 ou Llama 3.2, servi via Ollama) lit le texte brut du CV au format PDF et extrait un profil JSON propre et validé contenant les compétences, l'historique de travail et l'éducation. Aucune clé d'API cloud n'est requise.
2. **Recherche vectorielle sémantique**: les profils des candidats et les descriptions de poste sont tous deux encodés sous forme de vecteurs multidimensionnels à l'aide de `nomic-embed-text`, qui fonctionne également en local. La recherche de similitude cosinus est effectuée directement dans PostgreSQL via l'extension `pgvector`. Un candidat ayant "conçu des microservices" correspondra à un rôle recherchant une "expérience dans les systèmes distribués", car les vecteurs comprennent la proximité sémantique.
3. **Règles de gestion déterministes**: avant qu'une correspondance ne soit affichée, des contraintes strictes sont appliquées (exigences en matière de visa, alignement de la fourchette salariale, préférences de localisation ou de télétravail). L'IA ne peut pas contourner ces règles. Elles sont appliquées par la requête de base de données, pas par le modèle.

## L'explicabilité plutôt qu'une boîte noire

La partie dont je suis le plus fier est la couche d'analyse de l'adéquation. Pour chaque correspondance, le système génère une explication en langage naturel: pourquoi ce candidat correspond, quelles sont ses forces par rapport au rôle et, surtout, quelles sont les lacunes en matière de compétences. Les recruteurs ne se voient pas attribuer un score auquel ils doivent faire confiance aveuglément. Ils reçoivent un rapport lisible qui les aide à décider s'ils doivent faire avancer la candidature et quels points approfondir lors de l'entretien.

## Les technologies utilisées

Le backend est un service **FastAPI** avec SQLAlchemy asynchrone, la validation Pydantic, la journalisation JSON structurée et la propagation des ID de suivi des requêtes. La base de données est **PostgreSQL 15** avec des migrations de schéma gérées par Alembic et des opérations vectorielles traitées par **pgvector**. Les LLM et les embeddings sont servis localement par **Ollama**. Le frontend est un tableau de bord **React + Vite** avec des graphiques de télémétrie en temps réel, un flux de téléchargement de CV et un panneau de correspondance côte à côte avec des indicateurs de score circulaires. L'ensemble de la pile démarre avec un unique `docker compose up`.

## Pourquoi c'est important

Ce projet n'est pas seulement une démonstration de portfolio. C'est la preuve qu'un recrutement assisté par l'IA responsable, privé et rentable est possible aujourd'hui, sans dépendre de l'infrastructure cloud des géants de la technologie. Les modèles open-source locaux sont suffisamment performants pour effectuer des extractions structurées et des raisonnements sémantiques. Postgres est assez puissant pour effectuer des recherches vectorielles. Vous n'avez pas besoin d'envoyer un seul octet de données personnelles de candidats à un serveur externe.

Le code source est entièrement ouvert sur [GitHub](https://github.com/debopriyobasu/semantic-resume-matcher). Je serais ravi de recevoir les commentaires de toute personne travaillant dans le domaine des outils de recrutement ou s'intéressant aux systèmes d'IA locaux.
