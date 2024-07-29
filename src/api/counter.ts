import api from ".";

const getCount = async () => {
  try {
    const response = await api.get(`/counter`);
    return response.data;
  } catch (error) {
    console.error("1111 Failed to get counter:", error);
    throw error;
  }
};

const postCount = async () => {
  try {
    const response = await api.post(`/increment`);
    return response.data;
  } catch (error) {
    console.error("Failed to increment counter:", error);
    throw error;
  }
};

export { getCount, postCount };
