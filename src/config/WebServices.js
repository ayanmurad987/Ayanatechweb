
export const BASE_URL = `https://05ec-18-234-98-185.ngrok.io/`;
export const REGISTER = `${BASE_URL}auth/register`;
export const LOGIN = `${BASE_URL}auth/token`;
export const GET_ALL_SCHEMAS = `${BASE_URL}get_all_schemas`;
export const REGISTER_SCHEMA = (schema) => `${BASE_URL}register_schema?schema=${schema}`;
export const GET_ALL_QUERIES = (schema_id) => `${BASE_URL}get_all_queries?schema_id=${schema_id}`;
export const SAVE_QUERY = (schema_id, query) => `${BASE_URL}save_query?query=${query}&schema_id=${schema_id}`;
export const GENERATE_QUERY = (query_prompt) => `${BASE_URL}generate_query?query_prompt=${query_prompt}`;
