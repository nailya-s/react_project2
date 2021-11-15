import React from "react";
import axios from "axios";

export default class PostService {
   static async getAll() {
        try {
            const response = await axios.get(`https://stoplight.io/mocks/kode-education/trainee-test/25143926/users`);
            return response.data;
        } catch (e) {
           console.log(e.message);
        }
    }
}