# DatabindingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

# Concept 1 

## Databinding = Communication 
TypeScript Code  to HTML Code
1. Output Data from *.ts into HTML
   i). String interpolation 
        e.g. Use following code in HTML file {{fieldFromTsFile}}
   ii).Property Binding e.g. [HtmlProperty] = 'fieldContainingDataFromTsFile'
2. Event Binding i.e. Reacting to User Events from HTML Page to Ts file
   e.g. (event) = 'expression'   
3. Combining of Both. i.e. Two Way DataBinding
   e.g. [(ngModel)]='data'   

## Structural Directives start with *
   e.g. *ngIf , They are called so because they change the structure of the DOM
## Attribute Directive
   e.g. disabled    