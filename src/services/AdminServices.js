import axios from "axios";

const AdminServices = {

    getAllWashPacks: async () => {
        return await axios.get('http://localhost:9991/admins/findallWP')
            .then((response) => response.data)
            .catch((error) => console.log(error));
    },

    deleteWashPack: async (id) => {
        return await axios.delete('http://localhost:9991/admins/deleteWP', id)
            .then((response) => response.data)
            .catch((error) => console.log(error));

    },

    createWashPack: async () => {
        return await axios.post('http://localhost:9991/admins/addWP')
            .then((response) => response.data)
            .catch((error) => console.log(error));

    }

}

export default AdminServices;