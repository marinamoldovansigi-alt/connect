# SIGI CONNECT

## Description

SIGI CONNECT est un portail numérique centralisé pour les administrations communales luxembourgeoises. Cette application web complète offre une interface moderne et intuitive pour gérer les applications, les actualités, les tâches, la documentation et les formations.

## Caractéristiques principales

### Design System
- **Police**: Inter (Google Fonts)
- **Icônes**: Lucide React
- **UI Components**: shadcn/ui
- **Charte graphique moderne**: Sans gradients
- **Border-radius standardisé**: 12px
- **Wrapper responsive**: `max-w-[1120px] mx-auto`

### Couleurs
- **Primaire**: #156570
- **Secondaire**: #00A779
- **Toolbar**: #003946
- **Tertiaire**: #D9E506
- **Quaternaire**: #FF6110
- **Success**: #00A779
- **Info**: #008097
- **Destructive**: #D4183D

### Fonctionnalités

#### Multi-langue
- Français (FR) - par défaut
- Allemand (DE)
- Anglais (ENG)
- Luxembourgeois (LU)

#### Navigation
- Navigation parent-enfant complète
- Breadcrumb intégré
- Sidebar homogénéisé avec footer
  - Bouton collapse (Fleche)
  - Bouton "Besoin de support ?" (icône Headset)

#### Gestion des utilisateurs
- Système de rôles portail multiples
- Badges Admin
- Tableaux de membres homogénéisés
- Page Paramètres accessible depuis la photo de profil

#### Modules
- **Dashboard**: Vue d'ensemble personnalisée
- **Applications**: Catalogue d'applications avec vignettes
- **Actualités**: Gestion et affichage des news
- **Documentation**: Système de publication (Publié/Brouillon)
- **Formations**: Catalogue de formations
- **Tâches**: Gestion des tâches
- **Annuaire**: Contacts et membres
- **Support**: Système de demandes d'assistance

#### Gestion des entités
- Dashboard entité
- Gestion des membres
- Gestion des groupes
- Gestion des profils
- Gestion des applications

#### Administration portail
- Dashboard admin
- Gestion des utilisateurs
- Gestion des entités
- Gestion des applications
- Gestion des actualités

## Structure du projet

```
/
├── App.tsx                    # Point d'entrée principal
├── components/                # Composants React
│   ├── ui/                   # Composants UI shadcn
│   ├── figma/                # Composants Figma
│   └── icons/                # Icônes personnalisées
├── contexts/                  # Contextes React
│   └── LanguageContext.tsx   # Contexte multi-langue
├── data/                      # Données de l'application
├── imports/                   # Imports Figma
├── styles/                    # Styles globaux
│   └── globals.css           # CSS global avec variables
├── utils/                     # Utilitaires
└── public/                    # Assets publics
```

## Technologies utilisées

- **React** - Framework JavaScript
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Framework CSS
- **shadcn/ui** - Bibliothèque de composants UI
- **Lucide React** - Icônes
- **React Quill** - Éditeur de texte riche
- **Recharts** - Graphiques et visualisations

## Installation

```bash
# Cloner le repository
git clone https://github.com/marinamoldovansigi-alt/connect.git

# Accéder au répertoire
cd connect

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## Développement

Le projet suit les standards de développement modernes avec:
- Composants React fonctionnels
- Hooks personnalisés
- Context API pour la gestion d'état globale
- TypeScript pour la sécurité des types
- Tailwind CSS pour le styling

## Contribution

Ce projet est développé pour les administrations communales luxembourgeoises.

## Licence

© 2024 SIGI CONNECT. Tous droits réservés.

## Contact

Pour toute question ou assistance, veuillez contacter le support SIGI CONNECT.
