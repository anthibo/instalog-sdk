import axios from "axios";

export const handleErrors = (err: unknown) => {
    if (axios.isAxiosError(err)) {
        if (err.response?.status === 403) {
            throw new Error('Unauthorized. Please insert a correct secret key.');
          }
    }else {
        throw new Error('Unexpected. Something wrong happened, please contact us!')
    }
}