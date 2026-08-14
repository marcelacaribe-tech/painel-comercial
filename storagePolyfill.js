function chavePrefixada(key, shared) {
  return `${shared ? "shared" : "personal"}:${key}`;
}

if (typeof window !== "undefined" && !window.storage) {
  window.storage = {
    async get(key, shared = false) {
      const raw = localStorage.getItem(chavePrefixada(key, shared));
      if (raw === null) return null;
      return { key, value: raw, shared };
    },

    async set(key, value, shared = false) {
      localStorage.setItem(chavePrefixada(key, shared), value);
      return { key, value, shared };
    },

    async delete(key, shared = false) {
      const existiaAntes = localStorage.getItem(chavePrefixada(key, shared)) !== null;
      localStorage.removeItem(chavePrefixada(key, shared));
      return { key, deleted: existiaAntes, shared };
    },

    async list(prefix = "", shared = false) {
      const marcador = shared ? "shared:" : "personal:";
      const keys = Object.keys(localStorage)
        .filter((k) => k.startsWith(marcador))
        .map((k) => k.slice(marcador.length))
        .filter((k) => k.startsWith(prefix));
      return { keys, prefix, shared };
    },
  };
}
