# Reading Notes

## SQL Queries

SELECT [DISTINCT] [columns] as new_column_name
FROM [table]
INNER/LEFT/RIGHT/FULL JOIN [another table]
  ON firstTable.id = secondTable.id
WHERE [condition]
  AND/OR 2nd condition
  AND/OR 3rd condition
ORDER BY [column] [ASC/DESC]
LIMIT [num_limit] OFFSET [num_offset]
GROUP BY [column]
HAVING [condition]

INNER JOIN - data matches in both tables
LEFT JOIN - include rows from A regardless of whether matching row is found in B
RIGHT JOIN - opposite
FULL JOIN - rows from both tables are kept

## SQL Tables

INSERT INTO [table]
(column1, column2)
VALUES (column1 data, column2 data)

UPDATE [table]
SET column1 = column1value,
column2 = column2value
WHERE [condition]

DELETE FROM [table]
WHERE [condition]

CREATE TABLE IF NOT EXISTS [table] (
  column1 [datatype] [table constraint] DEFAULT [default value],
  column2 [datatype] [table constraint] DEFAULT [default value],
)

ALTER TABLE [table]
ADD column1 [datatype] [table constraint] DEFAULT [default value]
DROP [column]
RENAME TO [new table name]

DROP TABLE IF EXISTS [table]

![Exercise 1](./SQLBoltImages/SQL%20Bolt%2001.png)
![Exercise 2](./SQLBoltImages/SQL%20Bolt%2002.png)
![Exercise 3](./SQLBoltImages/SQL%20Bolt%2003.png)
![Exercise 4](./SQLBoltImages/SQL%20Bolt%2004.png)
![Exercise 5](./SQLBoltImages/SQL%20Bolt%2005.png)
![Exercise 6](./SQLBoltImages/SQL%20Bolt%2006.png)
![Exercise 7](./SQLBoltImages/SQL%20Bolt%2007.png)
![Exercise 8](./SQLBoltImages/SQL%20Bolt%2008.png)
![Exercise 9](./SQLBoltImages/SQL%20Bolt%2009.png)
![Exercise 10](./SQLBoltImages/SQL%20Bolt%2010.png)
![Exercise 11](./SQLBoltImages/SQL%20Bolt%2011.png)
![Exercise 12](./SQLBoltImages/SQL%20Bolt%2012.png)
![Exercise 13](./SQLBoltImages/SQL%20Bolt%2013.png)
![Exercise 14](./SQLBoltImages/SQL%20Bolt%2014.png)
![Exercise 15](./SQLBoltImages/SQL%20Bolt%2015.png)
![Exercise 16](./SQLBoltImages/SQL%20Bolt%2016.png)
![Exercise 17](./SQLBoltImages/SQL%20Bolt%2017.png)
![Exercise 18](./SQLBoltImages/SQL%20Bolt%2018.png)


## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
