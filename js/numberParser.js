const numberParser = () => {
	let countryCode = document.querySelector("#country-call-code").value;
	const number = document.querySelector("#wa-number").value;
  const waLink = document.querySelector(".wa-link");
	const regex = /(?:\+?\d{1,3}[-\s()]?)*\d{1,3}/g;
	const matches = (countryCode + number).match(regex);
  let parsedNumber;
	if (matches) {
		for (const match of matches) {		
			const modifiedMatch = match.startsWith("+")
				? match.substring(1)
				: match;
        parsedNumber = "https://wa.me/" + modifiedMatch;
		}
	}
  waLink.href = parsedNumber;
  waLink.innerText = parsedNumber;
  navigator.clipboard.writeText(parsedNumber);
  alert("Copied the WhatsApp link: " + parsedNumber);
};
