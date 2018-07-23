## The Application:
An application build in Vanilla Javascript. Which retrieves items from a json file which are shown in a list. When the user applies filters the state of the filters is saved in the IndexDB of the browser. So when the user has filtered once, the page can safely be reloaded. On the right side of the screen the applied filters are show.

## Structure
### Components
The application is build in reusable components. Which are meant to be generic an can be used on multiple places in the application
### Framework
Then a little framework which consists of three parts.  A generic html-builder, which outputs htmls which can be used in the application.
Inside the framework is also an indexedDB helper to save data in the interal database of the user.
Also inside the framework there is a generic view component which is used by the views
### Repository
Used for fetching the items from the json file. When there are items in the indexedDB those are fetched in favor of the file.
### Views
The view layer of the application to show the functionality on the screen

## Running the application
* clone the application
* run yarn install
* run yarn start
* the application is now running at localhost:8080

## Opdracht:
Maak een clone van deze repo en zet een webapplicatie op met een multiple-select-filter. Zie details hieronder. We willen zien hoe je een webapplicatie opzet en of je weloverwogen technische beslissingen kan maken.

## Gegeven:
* JSON file met inhoud voor multi-select (470 items)
* Design van multi-select
* Svg van zoek-icon

## Requirements:
* Toon de multi-selector met de JSON als opties
* Maak een zoekfunctie dat frontend filtering doet op de input
* Meerdere resultaten kunnen tegelijk geselecteerd worden
* Geselecteerde items komen bovenin de lijst te staan en worden niet gefilterd
* Bonus: Gebruiker kan door op een knop te klikken de data lokaal opslaan (de data wordt op page refresh opnieuw geladen)

## Belangrijkste challenge punten:
* gestructureerde HTML/CSS/Javascript
* JS architectuur (bijvoorbeeld MVC pattern)
* HTTP/REST
* ES6 / TypeScript

## Optionele challengepunten:
* Advanced css (Less/Sass/Responsive/?)
* Opzetten build street (npm/gulp/webpack/?)
* Data storage

## Requirements:
* Gebruik gestructureerde code (common practices/coding patterns)
* Het product hoeft niet af te zijn, als het maar voldoende inzicht geeft in het technisch niveau. Daarbij helpt het uiteraard wel als een deel van de code functioneert
* Je kan een framework (React, AngularJs) gebruiken waar je vertrouwd mee bent, maar je kan ons ook laten zien dat je begrijpt hoe Javascript werkt en patterns die in frameworks worden gebruikt kan reproduceren door VanillaJS te gebruiken (pré)
* Gebruik Typescript of ES6 (pré)
* Werken met TDD of BDD (pré)
