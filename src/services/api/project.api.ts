import axiosInstance from "../../Utils/Https"

export const getProjects = async () => {
    const url = "projects"
    const response = await axiosInstance.get(url)

    return response.data
}

export const createProjects = async (data: any) => {
    const url = "projects"
    const response = await axiosInstance.post(url, data)

    return response.data
}

export const getSingleProject = async (id: string) => {
    const url = `projects/${id}`
    const response = await axiosInstance.get(url)

    return response.data
}

export const updateProject = async (id: string, data: any) => {
    const url = `projects/${id}`
    const response = await axiosInstance.put(url, data)

    return response.data
}

export const createTask = async (data: any) => {
    const url = "tasks"
    const response = await axiosInstance.post(url, data)

    return response.data
}

export const getTasks = async (_id: any) => {
    const url = `/tasks?projectId=${_id}`;
    const response = await axiosInstance.get(url);
  
    return response.data;
  };

  export const updateTask = async (id: string, data: any) => {
    const url = `tasks/${id}`;
    const response = await axiosInstance.put(url, data);
  
    return response.data;
  }

  export const deleteTask = async (id: string) => {
    const url = `tasks/${id}`;
    const response = await axiosInstance.delete(url);
  
    return response.data;
  }
  

  export const getTasksCount = async () => {
    const url = `/tasks//count/user`;
    const response = await axiosInstance.get(url);
  
    return response.data;
  }