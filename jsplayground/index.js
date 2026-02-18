const obj = {
	name: "Kunal",
	age: "23"
}

console.log(obj);
console.log(Object.entries(obj));
for (const [key, value] of Object.entries(obj)) {
	console.log(`${key}: ${value}`);
}

const arr2 = [{ name: "Kunal", age: 22 }, { sports: "cricket" }];
const findObj = arr2.find((item) => item.name === "Kunal");
console.log(findObj);
