// utils/helpers.js
export const makeAbsoluteImageUrl = (path, apiBase) => {
    if (!path) return ""; // no image available
    if (path.startsWith("http")) return path; // already absolute
    if (!apiBase) return path; // fallback if base not provided
    const prefix = path.startsWith("/") ? "" : "/";
    return `${apiBase}${prefix}${path}`;
  };
