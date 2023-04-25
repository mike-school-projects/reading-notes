# Class Notes

This is an important topic because forms are a important type of user interface that we need to learn.

1. How do Django Forms facilitate user input handling, and what are some key components of creating a form using the Django framework?

Displays default forms

Receives data from submit and bind it to the form

Clean and validate the data.  

If invalid data, redisplay the form

If valid data, do something.

Need to use forms module.  

Use clean_<field name> clean and validate data. 

Need to add url to the app urls.py file.

2. Explain the purpose of Django Templates in web development and describe how template inheritance can be utilized to improve code reusability and maintainability.

Templates can be used to replicate common code across multiple pages.  Just need to extend a base html file.

Examples are like headers, footers, sidebars, etc.

3. Describe the function of Django Views in handling HTTP requests, and outline the differences between function-based views and class-based views.

Uses standard get / post methods to generate the form and to submit the data.

Class-based views are used to templatize views using python classes using implicit code.  Used for repetitive pages like snack detail page.

Function-based views are like standard views with explicit code, used for unique pages (like home page).

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
