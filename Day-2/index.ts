interface StudentData {
  name: string;
  email: string;
  rollNo: number;
}

const data: StudentData = {
  name: "rXg",
  email: "r@r.com",
  rollNo: 12,
};

function printData(data: StudentData) {
  console.log(data);
}

printData(data);
