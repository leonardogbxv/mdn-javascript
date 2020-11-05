const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, ...second];

const clone = [...first];

// * * *

const objFirst = { name: "Leo" }
const objSecond = { job: "Developer" }

const objCombined = { ...objFirst, ...objSecond, location: "Brazil" }