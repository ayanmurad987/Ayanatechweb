import { create } from 'apisauce';

const api = create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
});

class ApiSauce {
  async post(url, payload) {
    console.log("🚀 ~ file: networkRequest.js:12 ~ ApiSauce ~ post ~ payload", payload)
    const Header = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Accept': 'application/json'
      },
    };
    // return await api.post(url, payload, Header)
    const response = await api.post(url, payload);
    console.log("🚀 ~ file: networkRequest.js:20 ~ ApiSauce ~ post ~ response", response)
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }


  async postWithToken(url, payload, token, isHandle = true, contentType) {
    const Header = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.post(url, payload, Header);
    if (isHandle) {
      return new Promise((resolve, reject) => {
        this.handlePromise(resolve, reject, response);
      });
    } else {
      return response;
    }
  }

  async getWithToken(url, token) {
    const Header = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.get(url, {}, Header);
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async deleteWithToken(url, token) {
    const Header = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.delete(url, {}, Header);
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async putWithToken(url, token) {
    const Header = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.put(url, {}, Header);
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async getWithoutToken(url) {
    console.log("🚀 ~ file: networkRequest.js:87 ~ ApiSauce ~ getWithoutToken ~ url", url)
    const Header = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    const response = await api.get(url, {}, Header);
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  handlePromise = (resolve, reject, response) => {
    if (
      (response?.data?.success && response.status === 200) ||
      response.status === 201 ||
      response.originalError === null
    ) {
      resolve(response.data);
    } else {
      reject(response?.data);
    }
  };
}

export default new ApiSauce();