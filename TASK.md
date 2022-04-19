Prepare a button with the attribute id = "getCat". 
Make sure that after clicking on it, 
a GET query is sent to the API available at the indicated address:
https://api.thecatapi.com/v1/images/search

The API returns an array, 
get the first element from it (it's an object), 
and the address to a random kitten will be under the property "url".

Now it is enough to add dynamically the <img> element 
with the src parameter pointing to the previously drawn link to the cat's photo. 
Give the <img> element the attribute data-test = "img-kitty".
