## Steve Geluso's Challenge Response

Hello and welcome to my response to the instructor code challenge.
I had fun making all of this and I hope you enjoy taking time to
read through my response.

First, let's get to the point. Here's my basic Vanilla Javascript
solution [live on Heroku](https://serene-forest-5831.herokuapp.com/).

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

### Final Notes

I'm satisfied with this implementation. The site could use additional UX and visual design,
but the code is solid. This implementation represents a good functional skeleton for designers
to build on top of.

I'm happy to hear and discuss any feedback. Thank you for taking the time to read through
this README and examine my work.
