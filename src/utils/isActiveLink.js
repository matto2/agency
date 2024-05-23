export function isActiveLink(currentPath, navItemPath) {
    return currentPath.startsWith(navItemPath);
  }
  