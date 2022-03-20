@blackwych/typedoc-plugin-categorize-by-path
============================================

TypeDoc plugin to determine modules and categories from module paths


## Features

For each module:
* If any of `categoryPatterns` matched to module path, the captured category will be prepended and the module name will be renamed to the captured one.
* The first matched result will be used.
* Nothing will be changed if no pattern matched.


## Installation

Recommended for npm 5+
```
npx install-peerdeps --dev @blackwych/typedoc-plugin-categorize-by-path
```
otherwise
```
npm install -D @blackwych/typedoc-plugin-categorize-by-path
```


## Usage

TypeDoc will automatically detect and enable this plugin.


## Options

| Option             | Type       | Defaults | Description
|--------------------|------------|----------|--------------
| `categoryPatterns` | `string[]` | `[]`     | RegExp pattern strings that capture category and module names from module paths.<br>Each pattern must contain named capture groups `(?<category>...)` and `(?<module>...)`.

