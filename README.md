# JSON Essential Training
This is the repository for the LinkedIn Learning course JSON Essential Training. The full course is available from [LinkedIn Learning][lil-course-url].

![JSON Essential Training][lil-thumbnail-url] 

JSON has become the most common format for data interchange on the web, building from a JavaScript base to a wider set of API platforms. In this course, instructor Sasha Vodnik walks you through using the basic syntax of JSON and applying it in several common implementations to see how you can structure it with schemas and JSON-LD. Sasha begins by making sure you have a thorough understanding of how to build and debug JSON structures. After stepping through how to process JSON data, he shows you a variety of ways to use it. Next, Sasha covers techniques you can use to work with JSON, such as preventing data reuse and returning readable JSON data in JavaScript. He goes over how to create and validate JSON schema and how to work with schema generators. Sasha concludes with a discussion of JSON-LD and how you can use it to explain and map the structure of your data.

## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing
1. To use these exercise files, you must have the following installed:
	 - A modern browser, such as [Firefox](https://www.mozilla.org/firefox/download), [Chrome](https://www.google.com/chrome/), or [Edge](https://www.microsoft.com/edge).
   - A code editor, such as [Visual Studio Code](https://code.visualstudio.com/Download), [Atom](https://atom.io), or [Sublime Text](https://www.sublimetext.com/download).
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
3. Open the top level folder in your code editor.


### Instructor

Sasha Vodnik 
                            
Technology Educator & Web Developer

                            

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/sasha-vodnik).

[lil-course-url]: https://www.linkedin.com/learning/json-essential-training
[lil-thumbnail-url]: https://cdn.lynda.com/course/2887317/2887317-1629482229367-16x9.jpg
