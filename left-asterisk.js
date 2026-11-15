const requiredFields = [...document.querySelectorAll("i.fa.fa-asterisk")]
    .map(el => {
        let parent = el.parentElement;

        for (let i = 0; i < 5 && parent; i++) {
            const fields = parent.querySelectorAll("span.left-far");

            if (fields.length === 1) {
                return fields[0].textContent.trim();
            }

            parent = parent.parentElement;
        }

        return null;
    })
    .filter(Boolean);

console.log([...new Set(requiredFields)].join(", "));