# Class Notes

This is an important topic because using data is a big part of programming and we need to know how to use / maniuplate it.

1. What are the key features and benefits of Jupyter Lab, and how does it differ from Jupyter Notebook?

From jupyter.org:

Project Jupyter: Free software, open standards, and web services for interactive computing across all programming languages 

Jupyter Notebook: original web application for creating and sharing computational documents. It offers a simple, streamlined, document-centric experience

Jupyter Lab: web-based interactive development environment for notebooks, code, and data. Its flexible interface allows users to configure and arrange workflows in data science, scientific computing, computational journalism, and machine learning. A modular design invites extensions to expand and enrich functionality.

Or in other words, Jupyter Lab is the latest user interface for project jupyter and is more like an IDE, more features, more document views.

2. What are the main functionalities provided by the NumPy library, and how can it be useful in Python programming, particularly for scientific computing and data manipulation tasks?

NumPy is a Python data analysis package.  It's a module that can be imported in to analyze data like in a 2D matrix that formats the data and has methods that can be called to help look at the data.

It can be much easier to use built-in numpy methods to read and manipulate data than to code it from scratch.

3. Explain the basic structure and properties of NumPy arrays, and provide examples of how to create, manipulate, and perform operations on them.

Use csv module to open and read a csv file, denoting the delimiter.

Use numpy to create an array, denoting the data type.  Example:

wines = np.array(wines[1:], dtype=np.float64)

Access data from the row 1, all columns example:

print(wines[0,:])

Example of an operation to convert to int data type;

wines_int = wines.astype(int)

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
