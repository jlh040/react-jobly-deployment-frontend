import axios from "axios";
import jwt from "jsonwebtoken";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getAllCompanies() {
    let res = await this.request('companies');
    return res.companies;
  }

  static async searchForCompanies(name) {
    if (name.trim().length === 0) {
      return this.getAllCompanies();
    }
    else {
      let res = await this.request(`companies`, { name })
      return res.companies;
    }
  }

  static async getAllJobs() {
    let res = await this.request('jobs');
    return res.jobs;
  }

  static async searchForJobs(title) {
    if (title.trim().length === 0) {
      return this.getAllJobs();
    }
    else {
      let res = await this.request(`jobs`, { title })
      return res.jobs;
    }
  }

  static async signUp(userData) {
    const res = await this.request('auth/register', userData, 'post');
    return res.token;
  }

  static async login(userData) {
    const res = await this.request('auth/token', userData, 'post');
    return res.token;
  }

  static async getUser(token) {
    let username = jwt.decode(token).username;
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUser(username, userData) {
    await this.request(`users/${username}`, userData, 'patch');
    let user = await this.getUser(JoblyApi.token);
    return user;
  }

  static async applyForJob(username, jobId) {
    await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
    let user = await this.getUser(JoblyApi.token);
    return user;
  }
  
}

export default JoblyApi;
