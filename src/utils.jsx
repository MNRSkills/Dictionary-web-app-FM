export const getNestedData = (data, keyPath) => {
    return keyPath.reduce((acc, key) => (acc && acc[key] ? acc[key] : null), data);
  };
  