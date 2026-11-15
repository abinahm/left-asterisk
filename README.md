# left-asterisk
Gets the required fields with an asterisk beside them.

# Use case
I use this code to extract only the required fields that's marked with an asterisk besides them on the title.

## Limitations

- `copy()` is a DevTools console utility, so these only work when run from the console.
- Wait for dynamic content to finish loading before running.
- A required field is skipped if its nearest container holds more than one label.

