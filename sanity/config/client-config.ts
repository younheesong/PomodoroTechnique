import { dataset, projectId, userAdderToken } from "../env";
const clientConfig = {
  projectId: projectId,
  dataset: dataset,
  token: userAdderToken,
  useCdn: false,
};

export default clientConfig;
