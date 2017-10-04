# Vue Switchable Grid

Toggle display between list and grid views using Vue.js.

## Desired Behavior

1. On initial page load, the grid view (large images) must be displayed.
2. The user can switch between list and grid views by clicking on the respective icons in the upper right of a menu bar.
3. When in list view:
  * List view icon in the menu bar must be highlighted
  * Images must display at a smaller size in a vertical list with the text to the right
4. When in grid view:
  * Grid view icon in the menu bar must be highlighted
  * Images must display at a larger size filling the screen, from left to right
5. The application must not reload the entire page.  Must use Vue features to show/hide the content.

## Stretch Goals

1. Add instant search to the results
2. Add a form that allows users to change the number of items displayed
3. Restyle with Bootstrap or other framework
4. Fetch new data from a different API ( Craigslist: https://www.npmjs.com/package/node-craigslist )