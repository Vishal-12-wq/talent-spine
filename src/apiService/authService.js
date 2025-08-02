import axios from '../helpers/axios';
import { handleErrorToaster } from '../utils/function';

class AuthService {
    async login(body) {
        try {
            const response = await axios.post('/auth/login', body);
            return response.data;
        } catch (error) {
            handleErrorToaster(error)
            return false;
        }
    }
    async register(userData) {
        try {
            const response = await axios.post('/auth/register', userData);
            return response.data;
        } catch (error) {
            handleErrorToaster(error)
            throw Error(error);
        }
    }
    async updateProfile(body) {
        try {
            const response = await axios.put('/auth/profile', body);
            return response.data;
        } catch (error) {
            handleErrorToaster(error)
            return false;
        }
    }
    async getProfile() {
        try {
            const response = await axios.put('/auth/profile');
            return response.data;
        } catch (error) {
            handleErrorToaster(error)
            return false;
        }
    }
    async getProfileBySlug(slug) {
        try {
            const response = await axios.get(`/auth/profile-by-slug/${slug}`);
            return response.data;
        } catch (error) {
            handleErrorToaster(error)
            return false;
        }
    }
    async verifyToken() {
        try {
            const response = await axios.get('/auth/verifyToken');
            return response.data;
        } catch (error) {
            handleErrorToaster(error)
            return false;
        }
    }

    }

export default new AuthService();
