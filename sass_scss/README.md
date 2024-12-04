# Sass & SCSS: A Comprehensive Guide

## Resources

- Sass Basics
- Sass Flow Control Directives
- Sass References

# Learning Objectives

By the end of this guide, you will understand:

# General Concepts

- What Sass Means
  Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor that adds power and elegance to your stylesheets. It allows the use of variables, nested rules, mixins, and more.

- How to Write Sass & SCSS Files
  Sass can be written in two syntaxes:

- Sass: Indentation-based syntax without curly braces or semicolons.
- SCSS: CSS-like syntax with curly braces and semicolons.
- Differences Between Sass and SCSS

- Sass is more concise but less familiar to those accustomed to CSS.
- SCSS is a superset of CSS, meaning every valid CSS file is also a valid SCSS file.
- What is Sass Preprocessing
  Preprocessing converts Sass or SCSS files into regular CSS that browsers can read.

# Features of Sass

# Variables

Declare reusable values with the $ symbol.

```scss
$primary-color: #3d3d3d;

body {
  color: $primary-color;
}
```

# Nested Definitions

Nest selectors for better readability and structure.

```scss
body {
  margin: 0;
  padding: 0;

  p {
    margin: 10px;
  }
}
```

# Importing Sass Files

Use @import to include other Sass files.

```scss
@import "colors";

body {
  color: $red;
}
```

Mixins
Reusable blocks of styles to reduce redundancy.

```scss
@mixin margin-padding($value) {
  margin: $value;
  padding: $value;
}

div {
  @include margin-padding(10px);
}
```

Extending Styles (Inheritance)
Reuse styles using @extend.

```scss
.info {
  font-size: 12px;
}

.success {
  @extend .info;
  color: #00ff00;
}
```

Control Directives
Use programming constructs like loops and conditionals.

@if

```scss
$theme: dark;

body {
  @if $theme == dark {
    background: black;
    color: white;
  }
}
```

@for

```scss
@for $i from 1 through 5 {
  h#{$i} {
    font-size: #{$i * 2}px;
  }
}
```

@each

```scss
$list-names: julien, john, sam;

@each $name in $list-names {
  .photo-#{$name} {
    background: image-url("photos/#{$name}.jpg");
  }
}
```

@while

```scss
$i: 1;

@while $i < 5 {
  .loop-#{$i} {
    width: #{$i \* 10}px;
  }
  $i: $i + 1;
}
```

# Requirements

## General

- Use allowed editors like vi, vim, or emacs.
- Files will run on Ubuntu 18.04 LTS using Sass 3.7.4 or higher.
- Files must end with a new line and begin with a comment describing the task.
  Installation on Ubuntu

```bash

sudo apt-get install -y ruby2.5 ruby2.5-dev
sudo apt-get install ubuntu-dev-tools
gem install sass -v 3.7.4
sass --version # Verify installation
```

# Tasks Overview 0. Debugging

Write a Sass file to output Hello World in debug logs using @debug.

## 1. Color Variable

Define a color variable and apply it to body and p.

## 2. Colors

Use two variables for body and h2 background and text colors.

## 3. Nested Tag

Apply styles to nested p tags inside body.

## 4. Nested Class

Define styles for .red class inside body.

## 5. Nested Child

Target .red class directly under body using >.

## 6. Nested Hover

Change button colors on hover.

## 7. Nested Deeper

Apply multiple levels of nested font-size rules.

## 8. Margin Mixin

Create a mixin for margins.

## 9. Extend Styles

Use @extend for shared styles.

## 10. Import Colors

    Import variables from another file.

## 11. Loop Photos

    Generate classes with @each for a list of names.

## 12. Loop Headers

    Generate font-size rules for h1 to h5 using @for.
