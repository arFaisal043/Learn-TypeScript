/*
-- An enum (enumeration) is a way to define a set of named constants. It makes code more readable and self-documenting 
by grouping related values under a common name.

-- enum can also use as a type

*/


// enum Color {
//   Red = "RED",
//   Green = "GREEN",
//   Blue = "BLUE"
// }

// const rong: Color = Color.Blue;
// console.log(rong);




// _______ Without enum:

// type UserRole = "Admin" | "Editor" | "Viewer"; 

// const canEdit = (role: UserRole) => {
//   if (role === "Admin" || role === "Editor") return true;
//   else return false;
// };

// const isEditPermission = canEdit("Admin")




// _______ With enum:

enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer"
}

// UserRole.Admin = "Demo"; // not possible

const canEdit = (role: UserRole) => {
    if(role === UserRole.Admin || role === UserRole.Editor) return true;
    else return false;
}

const isEditPermission1 = canEdit(UserRole.Admin); 
const isEditPermission2 = canEdit(UserRole.Viewer);

console.log(isEditPermission1); // true
console.log(isEditPermission2); // false