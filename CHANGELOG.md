
### Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a
Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.1] - 2022-02-04 18:00 - 18:15 (170) Clean Release

1. Release to Build Area and carry out regression tests.

## [0.4.0] - 2022-02-04 14:30 - 17:15 (170) Step 4 

1. Add a product array contain 3 elements with attributes for the name,
   emoji and price.
1. Update the component to loop through all three.
1. Update the add and remove methods to update the state with product
   names list and total updates. 
1. Find a but in this implementation.
1. Modify the state to remove the total, it will be calculated
   dynamicall.
1. Modify the state to have an array of product elements, so each
   product selected is in the state with all 3 attributes.
1. Modify add and remove methods to support the new state data
   structured.
1. Modify the getTotal method to calculate the totalCost from the state
   using the Javascript Array.reduce functional.
1. Ensure that the remove function returns without changing state if
   someone tries to remove something from the cart if it wasn't added.

## [0.3.0] - 2022-02-04 12:30 - 13:15 (45) Step 3 

1. Define Product state with a cart array and a total.
1. Create getTotal method which returns the total.
1. Create add method to set the state to a fixed value for the icecream
   (no matter how many times you hit the button)
1. Create remove method to set the state to zero.

## [0.2.0] - 2022-02-04 11:00 - 11:45 (45) Step 2 Using State in a Component

1. Created Product component showing Shopping cart count of items and
   Total Cost.
1. Created state class property of Product and used this to store the
   state of the shopping cart, basically the count of items and the
   total cost.
1. Created add and remove methods to update the state of the shopping
   card and attached each to the relevant onClick methods of the Add and
   Remove Buttons.

## [0.1.0] - 2022-02-03 16:00 - 17:30 (90) Step 1 Create an Empty Project

### Added

1. This empty project is the same across all Digital Ocean tutorials, so
   use tag 0.1.0 from the exercise 2022-027-Style-React-Components-0.1.0
   to kick off this exercise.
1. Added LICENSE.txt as MIT License.

### Changed

1. Update `frontend/.env` to use the port for this exercise 22270.
1. Update `./src/components/App/App.js` to provide an update summary for
   this tutorial.

### Release

1. Carry out frontend build as per [Front End Build
   Instructions](./sdlc/work_instructions/rebuild.md)
1. Complete acceptance testing as per [Acceptance
   Tests](./sdlc/acceptance_tests/ACC-001.md)
1. Release signed off by carmelo@example.com.


