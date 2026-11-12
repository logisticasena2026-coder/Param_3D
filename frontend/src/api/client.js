const API_BASE = '/api';

export const apiClient = {
  getToken() {
    return localStorage.getItem('mq3d_token');
  },

  setToken(token) {
    if (token) {
      localStorage.setItem('mq3d_token', token);
    } else {
      localStorage.removeItem('mq3d_token');
    }
  },

  async request(endpoint, options = {}) {
    const token = this.getToken();
    const headers = {
      ...(options.headers || {})
    };

    if (token && !headers['Authorization']) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    if (!(options.body instanceof FormData) && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }

    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers
    });

    if (!res.ok) {
      let errorMsg = 'Error en la petición al servidor';
      try {
        const errorData = await res.json();
        errorMsg = errorData.error || errorMsg;
      } catch (e) {
        errorMsg = res.statusText || errorMsg;
      }
      const error = new Error(errorMsg);
      error.status = res.status;
      throw error;
    }

    return res.json();
  },

  // Descarga protegida de archivo 3D
  async downloadModel(productId, fileName = 'modelo.stl') {
    const token = this.getToken();
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${API_BASE}/products/${productId}/download`, {
      method: 'GET',
      headers
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'No fue posible autorizar la descarga del modelo 3D.');
    }

    const blob = await res.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(downloadUrl);
  }
};
