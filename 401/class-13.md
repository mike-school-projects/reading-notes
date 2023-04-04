# Class Notes

This is an important topic because finding regression models is key to data analysis and seeing how accurate your regression model is.

## How to Run Linear Regression in Python

Use the package Scikit-learn
```python
# from https://www.activestate.com/resources/quick-reads/how-to-run-linear-regressions-in-python-scikit-learn/
import numpy as  np
from sklearn.linear_model import LinearRegression

x = np.array([6, 16, 26, 36, 46, 56]).reshape((-1, 1))
y = np.array([4, 23, 10, 12, 22, 35])

model = LinearRegression().fit(x, y)

# Obtain the coefficient of determination by calling the model with the score() function, then print the coefficient:
r_sq = model.score(x, y)
print('coefficient of determination:', r_sq)

# Print the Intercept:
print('intercept:', model.intercept_)

# Print the Slope:
print('slope:', model.coef_) 

# Predict a Response and print it:
y_pred = model.predict(x)
print('Predicted response:', y_pred, sep='\n')
```

LinearRegression(fit_intercept=True, normalize=False, copy_X=True)

fit_intercept - calculates intercept.  Leave this as True.

normalizebool - converts input value to boolean.  Normally False.

## Linear Regression in Python

Regression is finding a model for data.

Useful for forecasting data.

Used for telling how correlated data is.

Multiple types of regression models: simple linear, multiple linear, polynomial, 

## Introduction to Simple Linear Regression

x variable (aka independant, or explanatory variable) - data we're using to try to predict y.

y variable (aka dependant, or response variable) - data we're trying to predict

y = mx + x to predict.

Least squares method: calculate difference between actual and predicted, square it, and minimize the sum.

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
