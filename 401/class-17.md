# Class Notes

This is an important topic because web scraping is awesome!  Find info on the web and use it.

## Scrape a Dynamic Website with Python

Dynamic websites load dynamically, presenting challenges for scraping.

BeautifulSoup is a library for scraping.

Playwright is a module that can help with dynamic websites.  It acts as a headless chrome browser to access websites.

ScrapingAntClient can also do it, accessed via an API interface

## What is Web Scraping

Web scraping is extracting data from websites using automation.

Fetch the website, and extract data from it.

May have legal issues with scraping.

There are multiple methods for websites to prevent web scraping, including blocking IPs, excessive traffic, changing front-end code, dynamic web pages.

## How to scrape websites without getting blocked

Websites include a robots.txt that specific rules that scrapers should follow.

Slow down requests to mimick real humans.

Change crawling pattern

Use proxies / multiple IP addresses.

Change user agents and http request headers

Use headless browser like Playwright

Don't scrape sites behind a login

## Python Playwright Tutorial for Beginners

import Playwright module

Setup URLs, login paths, and link paths.

Need to specific html element and attribute name for Playwright to interact with.

Playwright process:
- Open browser
- Open new page
- Open site
- Enter login and submit
- Check proper login

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
