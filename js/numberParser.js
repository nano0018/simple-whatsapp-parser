const numberParser = () => {
	let countryCode = document.querySelector("#country-call-code").value;
	const number = document.querySelector("#wa-number").value;
  const waLink = document.querySelector(".wa-link");
	const regex = /(?:\+?\d{2,3}(?:[ -]?\d{3}){2,}(?:[ -]?\d{2,})*)|(?:\+\d{2,3} \(\d{3}\) \d{2,})/g;
	const matches = (countryCode + number).match(regex);
  let parsedNumber;
	if (matches) {
    const modifiedMatch = matches.map(match => match.replace(/[^\d]/g, '')).join('');
    parsedNumber = `https://wa.me/${modifiedMatch}/?text=""`;
    waLink.href = parsedNumber;
    waLink.innerText = parsedNumber;
    navigator.clipboard.writeText(parsedNumber);
    alert("Copied the WhatsApp link: " + parsedNumber);
	} else {
    alert("Input field must contain a valid phone number");
  }

};
