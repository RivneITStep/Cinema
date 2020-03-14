import axios from 'axios';
export function get_users(data) {
    return dispatch => {
        axios.get('api/Users')
            .then(response => {
                this.info = response.data.bpi;
            })
            .catch(error => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => (this.loading = false));
    }
}
