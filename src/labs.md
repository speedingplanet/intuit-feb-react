# React Labs

## Lab 1: Component props

Build a component that will work as the column header for our table of students.

What props are we using?
What styling will we use?
What HTML will we generate?

## Lab 2: Event handling

Update your GridHeader component so that when you click on it (anywhere), it prints a message to the console: 'You clicked on the [field name] column".

## Lab 3: State

### Part 1

Eventually, clicking on GridHeader will toggle sorting of the data. For now, we just want to track which direction we are sorting. (We don't have any data yet, so we're not sorting anything!)

Set up state to track whether we are sorting ascending or descending. That is, every time a user clicks on a GridHeader, the state should change from ascending to descending or vice versa as appropriate. Validate that the state is correct by updating the console output to "You are sorting [field name] [direction]".

### Part 2

Use something as a sort indicator, and have it change when the sort direction changes. Remember that there are three states:

- When the component loads, there's no sort direction
- First click: ascending
- Second click: descending

...and then clicks toggle from that point.

Suggested sort indicators: You could use "V" for descending and "^" for ascending. Or you could go with emojis: 🔼 / 🔽, ⏫ / ⏬, ⬆️ / ⬇️. Or you could find some images!

## Lab 5: Iterative content

Using the information in src/data/people.ts, iterate over the content in the people array to generate a row for each person. Use this in the context of the Grid component we've been working with.

Work in src/labs/Lab05.tsx. Working on a git branch will be easier for managing updates.

Feel free to start with a big component (maybe GridBody?) that has all the row and cell generating code. After you get it to work, consider refactoring into smaller components (GridBody contains GridRows which contain GridCells?) as needed.

## Lab 6: Implementing proper typing

Set up the following types, if you haven't already

- Person
- PersonFields: The keys of person
- SortDirection: 'asc' | 'desc' | undefined
- SortConfig (PersonFields | undefined, SortDirection)
- SelectSortHandlerFn (sortColumn: PersonFields) => void
- GridColumnConfig for a field and a label

Using these types implies some changes in your code:

- The event handler for GridHeader should use SelectSortHandlerFn
- The useState code in GridHeaderRow should use SortConfig
  - Also replace '' with undefined, which will make it easier to do sorting in the next lab
- The big one, replace using column names as a string with using a GridColumnConfig, which has a field and a label
  - Another thing that will make sorting easier

## Lab 7: Sorting

- Create a GridContainer
  - Takes GridColumnConfig[] and Person[] as props
  - move the state handling code from GridHeaderRow into it
  - move the event handler from GridHeaderRow into it (part of the above)
  - Pass the eventHandler, GridColumnConfig, SortConfig (from the state) to GridHeaderRow
  - Pass the people, GridColumnConfig to GridBody
- GridHeader
  - Update the event handler to call the passed event handler
- GridBody
  - props are Person[] and GridColumnConfig[]
  - iterate over people to generate rows, key is person.id
  - iterate over columns to generate cells, key is column.field.
- Everything above this is setup/foundation stuff
- Go back to GridContainer
  - Import the 'orderBy' function from the 'lodash' library (already installed)
    - let sortedArray = orderBy(array, sortField, sortDirection)
  - In the event handler for handling the selected sort field, update the SortConfig
  - OUTSIDE the event handler, but BEFORE the return statement, use orderBy to sort the people array with the information in SortConfig.
  - Pass the sorted array into GridBody to re-render

## Lab 8: Async data

Refactor the code from the last lab to fetch data asynchronously.

- Remove the import from '../data/people'
- Make sure that you have the REST server running `npm run rest-server`
- Figure out which component should fetch the data from the REST server
  - You will need to use both `useState` and `useEffect` to fetch the data
  - Don't forget the second argument on `useEffect` so you're not in an endless fetching loop!
- Use either Promises or async/await, according to your preferences
