export const getPagination = (page, size) => {
    const limit = size ? +size : undefined;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };