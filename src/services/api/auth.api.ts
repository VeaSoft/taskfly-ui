import axiosInstance from "../../Utils/Https"

export const googleAuthCallback = async () => {
  try {
    console.log('Callback triggered.');
    
    const searchParams = new URLSearchParams(window.location.search);
    const codeParam = searchParams.get('code');

    if (!codeParam) {
      throw new Error('Code parameter not found in the URL.');
    }

    const url = `auth/google/callback?code=${codeParam}`;
    console.log('Callback URL:', url);

    const response = await axiosInstance.get(url);
    
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

