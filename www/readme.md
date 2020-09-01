# Insult Tech 👿

Ever wanted to easily insult your friends? its never been easier!

## Installation

### Generating the insults

Make sure node is installed, and execute the following commands

```bash
cd ./node
npm i
node .
```

### Exporting to an server

You need to export the following files to an apach/nginx server:

- ./index.php
- ./insults/*
- ./assets/*

## Usage

Link http(s)://example.com/ for default insults (insults Tech).
Link http(s)://example.com/(name) to insult someone specific.

When adding a name, it insults this person in the embed, and if you click it you can generate more insults.