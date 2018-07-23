
## Assignment:
Create a clone of this repo and setup a webapp wich a multiple-select-filter. See details below. Our goal is to get an idea of how you setup a webapp and overcome technical challenges.
## The Application:
An application build in Vanilla Javascript. Which retrieves items from a json file which are shown in a list. When the user applies filters the state of the filters is saved in the IndexDB of the browser. So when the user has filtered once, the page can safely be reloaded. On the right side of the screen the applied filters are show.

## Structure
#Components
The application is build in reusable components. Which are meant to be generic an can be used on multiple places in the application
#Framework
Then a little framework which consists of three parts.  A generic html-builder, which outputs htmls which can be used in the application.
Inside the framework is also an indexedDB helper to save data in the interal database of the user.
Also inside the framework there is a generic view component which is used by the views
#Repository
Used for fetching the items from the json file. When there are items in the indexedDB those are fetched in favor of the file.
#Views
The view layer of the application to show the functionality on the screen

## Running the application
* clone the application
* run yarn install
* run yarn start
* the application is now running at localhost:8080
## Given assets:
* JSON file with data entries for the multi-select (470 items)
* Multi-select design
* Search-icon (svg)

## Requirements:
* Show the multi-select and fill it with the given JSON data
* Create a search which can filter the JSON data
* Make it possible to select multiple items
* Selected items need to be ordered on top, also they should not be affected by the search filter
* BONUS: store the selected items locally. They should persist after page reload.

## Primary criteria:
* structured HTML/CSS/Javascript
* JS architecture (ex. MVC pattern)
* HTTP/REST
* ES6 / TypeScript

## Secondary criteria:
* Advanced css (Less/Sass/Responsive/?)
* Data storage
* Build street setup (npm/gulp/webpack/?)

## Takeaways:
* You write well structured code (use common practices / coding patterns)
* It ok if you do not finish the project. Our goal is to get an insight of your skills. Though it helps if (part of) the code works ;)
* You can use a framework you are familiar with (Angular, React), but if you can prove that you know the inner workings of Javascript and are able to reproduce practices that are used in frameworks, that's a definite plus.
* It's a plus if you use Typescript of ES6
* It's a plus if you use TDD or BDD


## Requirements:
* Gebruik gestructureerde code (common practices/coding patterns)
* Het product hoeft niet af te zijn, als het maar voldoende inzicht geeft in het technisch niveau. Daarbij helpt het uiteraard wel als een deel van de code functioneert
* Je kan een framework (React, AngularJs) gebruiken waar je vertrouwd mee bent, maar je kan ons ook laten zien dat je begrijpt hoe Javascript werkt en patterns die in frameworks worden gebruikt kan reproduceren door VanillaJS te gebruiken (pré)
* Gebruik Typescript of ES6 (pré)
* Werken met TDD of BDD (pré)
