/*
- By Enum:

enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

// UserRole.Admin = "Demo"; // not possible

const canEdit = (role: UserRole) => {
  if (role === UserRole.Admin || role === UserRole.Editor) return true;
  else return false;
};

const isEditPermission1 = canEdit(UserRole.Admin);
const isEditPermission2 = canEdit(UserRole.Viewer);

console.log(isEditPermission1); // true
console.log(isEditPermission2); // false






// __________ By as const _________________

// Key and Value are exactly same
{ Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
}



// step 1: js object and add as const -> so that it cannot reassign in UserRole
const UserRole = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const


// step 2: use keyOf typeOf
const canEdit = (role: keyof typeof UserRole) => {
  // now role:  "Admin" | "Editor" | "Viewer"
  if (role === UserRole.Admin || role === UserRole.Editor) return true;
  else return false;
};

const isEditPermission1 = canEdit(UserRole.Admin);
const isEditPermission2 = canEdit(UserRole.Viewer);

console.log(isEditPermission1); // true
console.log(isEditPermission2); // false











// if object key and value are not exact same.


{
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
}

// step 1: js object and add as const -> so that it cannot reassign in UserRole
const UserRole = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

// step 2: use keyOf typeOf
const canEdit = (role: (typeof UserRole)[keyof typeof UserRole]) => {
  // now role:  "ADMIN" | "EDITOR" | "VIEWER"
  if (role === UserRole.Admin || role === UserRole.Editor) return true;
  else return false;
};

const isEditPermission1 = canEdit(UserRole.Admin);
const isEditPermission2 = canEdit(UserRole.Viewer);

console.log(isEditPermission1); // true
console.log(isEditPermission2); // false


*/





