export type DevRole = "admin" | "maintainer" | "contributor";

export interface DevIdentity {
  role: DevRole;
  permissions: string[];
}

export function getDevIdentity(role: DevRole): DevIdentity {
  const permissions = getPermissionsForRole(role);
  return {
    role,
    permissions
  };
}

function getPermissionsForRole(role: DevRole): string[] {
  switch (role) {
    case "admin":
      return ["read", "write", "delete", "deploy", "manage"];
    case "maintainer":
      return ["read", "write", "deploy"];
    case "contributor":
      return ["read", "write"];
    default:
      return ["read"];
  }
}