// Find all required-field asterisks and extract their associated label text
const requiredFields = [...document.querySelectorAll("i.fa.fa-asterisk")]
    .map(el => {
        let parent = el.parentElement;
		
		// Traverse the DOM up to 5 ancestor levels
        for (let i = 0; i < 5 && parent; i++) {
 			// DOM is Document Object Model -> Makes HTML into live nodes
            const fields = parent.querySelectorAll("span.left-far");
			
			// Only return if there's an exact 1-to-1 match to avoid grabbing labels from sibling fields
            if (fields.length === 1) {
                return fields[0].textContent.trim();
            }
			
			// Moves variable reference one level higher up the HTML DOM tree
            parent = parent.parentElement;
        }

        return null;
    })
    .filter(Boolean); // Remove any asterisk where a matching label wasn't found

//Filter and log unique fields
console.log([...new Set(requiredFields)].join(", "));
