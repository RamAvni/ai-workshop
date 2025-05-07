import { connectorSecret as ConnectorSecret } from "@hilma/secrets-handler";
export declare let privateSecret: {
    mysqlSecret?: ConnectorSecret;
};
export declare const setEnv: () => Promise<void>;
