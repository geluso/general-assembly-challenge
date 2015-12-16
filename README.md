## Steve Geluso's Challenge Response

Hello and welcome to my response to the instructor code challenge.
I had fun making all of this and I hope you enjoy taking time to
read through my response.

There are two branches in this repo and two responses to this challange.
The first is a Vanilla Javascript solution that exists on the master branch.
The second is an Angular solution that exists on the angular branch.

- [live Vanilla Javascript site](https://serene-forest-5831.herokuapp.com/).
- [live Angular site](https://omdb-challenge-angular.herokuapp.com/).

### Initial Bug Fixes

You can see my initial [bug fixes](https://github.com/geluso/general-assembly-challenge/commit/3fba0dd0c384f80b883fbcb6ca1b7879897ec016).
The most common mistakes were unbalanced parenthesis and curly braces.
Other bugs were caused by forgetting to import a library, and using an API
incorrectly. These can all be fixed by carefully reading through error output
and maintaining good style all throughout the file while programming.

I can not stress enough how important indentation is! It may seem meticulous, but
maintaining strictly proper indentation throughout a program makes the difference
between a quick logical read through of a program and hunting for a needle in a rat's
nest. If there's ever a syntax error in a program then indentation is the first
thing that should be fixed.

Forgetting to import things and using APIs incorrectly are revealed by error messages.
One should not be afraid to read error messages. They're not as scary as they seem.
Often error messages include a specific line number pointing exactly to where the mistake
lies. If the error says something is undefined, make sure it's been declared somewhere
before that line, or double-check to make sure you're using the API correctly. Sometimes
it is helpful to try out a small piece of script in the console to make sure it's
behaving correctly.

### Commit History

My commit history shows my approach to this problem. There are many commits and
each commit is at a stable point of development. Each commit message strives to
concisely explain what has changed. Reading through just the commit history should
provide an idea of how this was all created.

This commit history provides a clear example of how a project should be committed to often,
with descriptions and stabily.

### UX Design Decisions

> EDIT: Oops, I didn't see the "single-page app" requirement until double-checking the
requirements at the end of the night when I finished this all (including bonus work).
The Vanilla Javascript page is split across three HTML pages that all share the same design.
I hope my implementation still shows enough technical merit and sensible usability that the app
follows the spirit of the challenge.
> (The Angular app is naturally a single-page app.)

This challenge didn't come with exact specs of how the site should look. I made some
personal designs about the layout of the site. I split the site into three pages:

- The favorites page is accessible from the top nav. It shows a table containing
every movie the user has added to their list of favorites. Clicking on the title
of any movie on this page takes the user to the movie detail page for that movie.
There is no way to remove a movie from the list of favorites.

- The movie detail page is it's own page that shows the poster of a movie with a "Add
to favorites" link below. A plot summary and all details about the movie are listed to
the right beside the poster.

- The search page is the home page. It initially shows an input and a search button.
Search results appear in a table
below the seach box. A red error message appears in place of the table if there were
no results or the search failed. Clicking on the title of a search result leads the
user to a page showing the details for the movie. There's also a favorite column that
allows users to immediately add a movie to their favorites.

The top nav bar exists on every page and allows users to immediately navigate to the
search page and the favorites page.

This implementation represents a good functional skeleton for designers to build on top of.
Everything is left without much CSS so a designer can come in and polish it up.

### Redundancy

Each page has it's own javascript file that acts as a controller for that page. There's
additionally two other files, that include functionality used across all pages.
[http.js](https://github.com/geluso/general-assembly-challenge/blob/master/public/js/http.js)
provides easy to use functions that encapsulate GET and POST JSON AJAX requests.
[common.js](https://github.com/geluso/general-assembly-challenge/blob/master/public/js/common.js)
contains functions that build links to movie detail pages and links to favorite movies.
These functionalities were required on every page and so were condensed to living in one place.

### HTTP Engine

The requirements of this challange stipulated that only vanilla javascript be used.
At first I built the page using jQuery because it made it easy to handle AJAX requests.
After Annie clarified I could not use jQuery evern for AJAX requests I built
[http.js](https://github.com/geluso/general-assembly-challenge/blob/master/public/js/http.js)
to handle all AJAX requests across the site.

The engine is quite simple and offers shortcut methods for GET and POST requests according
to MDN specifications. There's a comment at the top of the file providing a link to the
[MDN documentation](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started)
I based everything on.

### Documentation and Style
I left comments and notes throughout the code so anyone reading through it may
easily understand what is going on. Furthermore, the organization of the project files,
the names of variables, and the names of methods all strive to be sensible.

### Bonus Angular Response

Converting the application to Angular introduced a solid HTTP library, a template system,
and automatic DOM manipulation.

The $http library Angular provides makes me more confident network requests won't fail due
to encoding issues. In the Vanilla Javascript application I had to manually encode network
requests myself.

Angular's template system reduces the redundancy of the HTML files. Now there is one
[index.html](https://github.com/geluso/general-assembly-challenge/blob/angular/public/index.html)
file that defines the structure for the entire site. Now the
[template directory](https://github.com/geluso/general-assembly-challenge/tree/angular/public/js/templates)
includes small HTML files that define the unique parts of the search, detail and favorite pages.
Using this template system will make it easier to maintain and modify the site.

Two-way data binding is perhaps my favorite Angular feature. Each view has a $scope
variable where data can be attached. Anything on the $scope is accessible in the view
and in the controller. This makes it easy to read search input and relay it to the API.
Conversely, it's easy to bind search results to the view and define how they should be displayd.
Using Angular's two-way data binding allowed me to rip out literally all of the old
DOM manipulation code.

It's also worth pointing out the simplicity of the new
[ApiService](https://github.com/geluso/general-assembly-challenge/blob/angular/public/js/services/api.js).
This one file encapsulates the entire API of our backend. Angular's $http module
and use of promises made it easy to define how out applicaton should interact with
the server.

### Bonus Discussion of Angular's Pitfalls

Angular is not without it's pitfalls. The framework is hard to learn, and not easy to
remember. It took me a long time to get things up and running. Learning the difference
between Controllers and Services and getting into Directives is all difficult.

Angular is hard to debug. The framework is notorious for spitting out inscrutible error
messages. I specifically used an unminified version of Angular so the error messages would
be more clear.

Notice that the design of the search results and the favorites list changes between the
Vanilla Javascript implementation and the Angular implementation. Angular's ng-repeat
directive has trouble repeating over items in a row. I replaced the tables with lists
to get around this embarrassing pitfall.

Angular is a great library to use for people that have extensive experience with web
development. It offers a lot of power, but it can quickly spin wildly out of control.
Understanding Angular requires understanding other hard-to-understand concepts, like
[Promises](https://docs.angularjs.org/api/ng/service/$q).
Before anyone used too much Angular I would recommend they spend some time with jQuery,
and make sure they have definitely mastered Vanilla Javascript.

### Final Notes

I'm happy to hear and discuss any feedback. Thank you for taking the time to read through
this README and examine my work.
