var empidV, nameV, genderV, deptV;

function readFom() {
 empidV = document.getElementById("empid").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  deptV = document.getElementById("dept").value;
  console.log(empidV, nameV, deptV, genderV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("employee/" +empidV)
    .set({
      empid:empidV,
      name: nameV,
      gender: genderV,
      dept: deptV,
    });
  alert("Data Inserted");
  document.getElementById("empid").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("dept").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("employee/" +empidV)
    .on("value", function (snap) {
      document.getElementById("empid").value = snap.val().empid;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("dept").value = snap.val().dept;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("employee/" +empidV)
    .update({
      //   empidNo:empidV,
      name: nameV,
      gender: genderV,
      dept: deptV,
    });
  alert("Data Update");
  document.getElementById("empid").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("dept").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("employee/" +empidV)
    .remove();
  alert("Data Deleted");
  document.getElementById("empid").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("dept").value = "";
};
