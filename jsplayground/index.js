const obj = {
	name: "Kunal",
	age: "23"
}

console.log(obj);
console.log(Object.entries(obj));
for (const [key, value] of Object.entries(obj)) {
	console.log(`${key}: ${value}`);
}

const arr = [{ name: "Kunal", age: 23 }, { sports: "cricket" }];

const filteredArr = arr.filter((item) => item?.name === "Kunal");
console.log(filteredArr);
