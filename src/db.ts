import { Pool } from "pg";

const connectionString = 'postgres://tisxxadi:nfMQo-yI_e0k4mgXlahajcQ_FyvM_gw-@tai.db.elephantsql.com/tisxxadi';

const db = new Pool({ connectionString });

export default db;