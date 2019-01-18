import ApolloClient from "apollo-boost";
import auth from "../auth";

const headers = () => {
    const {api_host, api_key} = auth.getAuth();
    return {
        "X-Redmine-API-Host": api_host,
        "X-Redmine-API-Key": api_key,
    };
};
const client = new ApolloClient({
    uri: `${process.env.REACT_APP_API_URL}`,
    // tslint:disable-next-line:object-literal-sort-keys
    headers: headers(),
});
export default client;
