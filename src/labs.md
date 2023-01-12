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

## Lab 6: Implementing sort

The moment we've been waiting for! Implementing a sort. We will talk about the challenges of sorting content, and then try to implement it in our Grid.
