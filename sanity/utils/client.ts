import { createClient } from "next-sanity";
import clientConfig from "../config/client-config";

export const client = createClient(clientConfig);
