const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
const url = process.env.HOST || "http://localhost/api/v1";
console.log("Myurl is" , url)

const fetchApi = async (
  endpoint: string,
  method: string,
  body?: any,
  isFormData = false
) => {
  const headers: any = {
    Authorization: `Bearer ${token}`,
  };

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  try {
    const response = await fetch(`${url}${endpoint}`, {
      method,
      credentials: "include",
      headers,
      body: body ? (isFormData ? body : JSON.stringify(body)) : null,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error occurred while fetching ${endpoint}:`, errorText);
    }

    return await response.json();
  } catch (error) {
    console.error("Server error occurred", error);
  }
};

const prepareFormData = (formDataObject: any) => {
  const formData = new FormData();

  [
    "title",
    "description",
    "city",
    "state",
    "pincode",
    "category",
    "latitude",
    "longitude",
    "ownerId",
    "productId",
    "price",
    "userId",
  ].forEach((field) => {
    if (formDataObject[field]) {
      formData.append(field, formDataObject[field]);
    }
  });

  if (formDataObject.images && formDataObject.images.length > 0) {
    formDataObject.images.forEach((image: File) => {
      formData.append("images", image);
    });
  }
  console.log(formData.get("price"));
  return formData;
};

export const addProduct = async (formDataObject: any) => {
  console.log("token", token);
  const formData: any = prepareFormData(formDataObject);
  return fetchApi("/product/", "POST", formData, true);
};

export const getProducts = async (latitude: string, longitude: string) => {

  return fetchApi(
    `/product?latitude=${latitude}&longitude=${longitude}`,
    "GET"
  );
};

export const getMyAds = async () => {
  return fetchApi("/myads", "GET");
};

export const getProduct = async (id: string) => {
  return fetchApi(`/product/${id}`, "GET");
};

export const editProduct = async (id: string, formDataObject: any) => {
  const formData = prepareFormData(formDataObject);
  return fetchApi(`/product/${id}`, "PUT", formData, true);
};

export const deleteProduct = async (id: string) => {
  return fetchApi("/product/" + id, "DELETE");
};

export const searchProduct = async (query: string) => {
  return fetchApi(`/product/find?query=${query}`, "GET");
};

export const createRequest = async (productId: string, ownerId: string) => {
  const formData = prepareFormData({
    productId,
    ownerId,
  });
  console.log(token);
  return fetchApi(`/product/request`, "POST", formData, true);
};

export const clientRequest = async () => {
  return fetchApi("/product/request/client", "GET");
};

export const ownerRequest = async () => {
  return fetchApi("/product/request/owner", "GET");
};

export const approveRequest = async (userId: string, productId: string) => {
  const formData = prepareFormData({
    productId,
    userId,
  });
  return fetchApi("/product/request/approve", "PUT", formData, true);
};

export const getNotification = async () => {
  try {
    const notification = await fetchApi("/notification", "GET");
    return notification;
  } catch (e) {
    return null;
  }
};
