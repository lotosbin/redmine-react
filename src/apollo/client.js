import ApolloClient from "apollo-boost";
import auth from "../auth";

const headers = () => {
    let {api_host, api_key} = auth.getAuth();
    return {
        "X-Redmine-API-Host": api_host,
        "X-Redmine-API-Key": api_key
    }
};
const client = new ApolloClient({
    uri: "http://118.190.32.118:32768/graphql",
    headers: headers()
});
export default client;