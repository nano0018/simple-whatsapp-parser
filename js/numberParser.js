const numberParser = () => {
	let countryCode = document.querySelector("#country-call-code").value;
	const number = document.querySelector("#wa-number").value;
  const waLink = document.querySelector(".wa-link");
	const regex = /\d{2,}/g;
  if (number[0] === '+') {
    countryCode = "";
  }
	const matches = (countryCode + number).match(regex).join('');
  let parsedNumber;
	if (matches) {
    parsedNumber = `https://wa.me/${matches}/?text=`;
    console.log(matches);
    waLink.href = parsedNumber;
    waLink.innerText = parsedNumber;
    navigator.clipboard.writeText(parsedNumber);
    alert("Copied the WhatsApp link: " + parsedNumber);
	} else {
    alert("Input field must contain a valid phone number");
  }

};
