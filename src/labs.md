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
  - Takes columnConfig[] and people[] as props
  - move the state handling code into it
  - move the event handler into it (part of the above)
  - Pass the eventHandler, columnConfig, sortConfig to GridHeaderRow
  - Pass the people, columnConfig to GridBody
- GridHeaderRow
  - Update to generate off of GridConfig
  - Pass column, eventHandler, sortIndicator to GridHeader
- GridHeader
  - Update the event handler to call the passed event handler
  - Update content to use column.label
- GridBody
  - props are people and columns
  - iterate over people to generate rows, key is person.id
  - iterate over columns to generate cells, key is column.field.
