# uikit-doxygen
A UIKit based theme for Doxygen

## Getting Started

Start by cloning the repository with:

`git clone https://github.com/calben/uikit-doxygen`

You can now open a terminal to the sample-project directory and run the below to generate the sample documentation.
`doxygen Doxyfile`

## Required Software

Install doxygen from here: http://www.stack.nl/~dimitri/doxygen/download.html
And add it to the environment path.

Install graphviz from here: graphviz.org
And also add this to the environment path.


## Editing the Style

The style is controlled by the header.html, footer.html, and uikit-doxygen.js.
Editing the header and footer to achieve a desired effect can be quite difficult, but using the uikit-doxygen you can modify the document with any jQuery code.

Editing the uikit-doxygen seems to be most easily done with a sample page inspected from sample-project/html in a browser and the sample-project/html/uikit-doxygen.js open in a text editor.
After editing the sample-project/html/uikit-doxygen, you can refresh the page to see the effects.
When satisfied, copy your modified javascript file into the js directory to use it for future documentation.

![demo image](https://github.com/calben/uikit-doxygen/blob/master/doc/editing-the-uikit-doxygen-file.png?raw=true)
